import * as React from 'react';
import classNames from 'classnames';

const baseClass = 'gc-slider';

type SliderSizes = 'full';

interface Props {
  size?: SliderSizes;
  min: number;
  max: number;
  step?: number;
  value: number;
  sufix?: string;
  ticks: boolean;
  title?: string;
  hint?: any;
  onChange?: (value: number) => void;
  className?: string;
}

interface State {
  value: number;
}

class Slider extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    value: 0,
    sufix: '',
    min: 0,
    max: 100,
    ticks: false,
  };

  private input: any = React.createRef<HTMLInputElement>();
  private bar: any = React.createRef<HTMLSpanElement>();
  private output: any = React.createRef<HTMLOutputElement>();
  private width = 0;
  private percentage: number;

  constructor(props: Props) {
    super(props);

    const { value, min, max } = this.props;

    this.state = { value };

    this.percentage = ((value - min) * 100) / (max - min);

    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.calculate();

    setTimeout(() => this.calculate(), 200);
  }

  calculate() {
    const { min, max } = this.props;

    this.percentage =
      ((parseFloat(this.input.current.value) - min) * 100) / (max - min);

    this.width = this.input.current.offsetWidth;

    const position = (this.percentage * (this.width - 16)) / 100;

    this.output.current.style.left = `${position}px`;
    this.bar.current.style.width = `${position}px`;
  }

  handleInput = () => this.calculate();

  handleChange = () => {
    const { onChange } = this.props;

    this.setState({ value: parseFloat(this.input.current.value) }, () => {
      onChange && onChange(this.state.value);
    });
  };

  header() {
    const { title, hint } = this.props;

    return (
      <header className={`${baseClass}__header`}>
        <label className={`${baseClass}__title`}>{title}</label>
        {hint && <div className={`${baseClass}__hint`}>{hint}</div>}
      </header>
    );
  }

  datalist(id: any) {
    const { min, max } = this.props;
    const values = [];

    for (let value = min; value < max; value += 1) {
      values.push(
        <option
          className={`${baseClass}__tick`}
          key={`option-${Math.floor(Math.random() * 1000000)}`}
          value={value}
        />
      );
    }

    return (
      <datalist id={`datalist-${id}`} className={`${baseClass}__ticks`}>
        {values}
      </datalist>
    );
  }

  render() {
    const {
      size,
      min,
      max,
      ticks,
      step,
      title,
      hint,
      sufix,
      className,
    } = this.props;

    const classes = classNames(
      baseClass,
      size && `${baseClass}--${size}`,
      className
    );

    const dlID = Math.floor(Math.random() * 1000000);

    return (
      <div className={classes}>
        {(title || hint) && this.header()}
        <span className={`${baseClass}__body`}>
          {ticks && this.datalist(dlID)}
          <input
            {...this.props}
            ticks={null}
            hint={null}
            type="range"
            min={min}
            max={max}
            step={step}
            value={this.state.value}
            // @ts-ignore
            list={ticks ? `datalist-${dlID}` : null}
            onChange={this.handleChange}
            onInput={this.handleInput}
            ref={this.input}
            className={`${baseClass}__input`}
          />
          <span className={`${baseClass}__bar`} ref={this.bar} />
          <output className={`${baseClass}__value`} ref={this.output}>
            {this.state.value}
            {sufix}
          </output>
        </span>
      </div>
    );
  }
}

export default Slider;
