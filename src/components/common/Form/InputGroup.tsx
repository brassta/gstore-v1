import * as React from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';

interface Props {
  input: any;
  hint?: any;
  help?: any;
  prefix?: any;
  sufix?: any;
  inline?: boolean | null;
  error?: string;
  size?: any;
  className?: string;
}

const baseClass = 'gc-input-group';

const cloneElement = (element: any, props: any = {}) => {
  if (!element || !React.isValidElement(element)) {
    return element;
  }

  const properties = {
    ...props,
    ref: React.isValidElement(element) ? props.ref : null,
  };

  return React.cloneElement(element, properties);
};

class InputGroup extends React.PureComponent<Props> {
  private isUpdated: boolean;
  private prefixRef: React.RefObject<HTMLElement>;
  private inputRef: React.RefObject<HTMLElement>;
  private sufixRef: React.RefObject<HTMLElement>;

  constructor(props: Props) {
    super(props);

    this.isUpdated = false;

    this.prefixRef = React.createRef();
    this.inputRef = React.createRef();
    this.sufixRef = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => this.adjustPaddings(), 100);
  }

  componentDidUpdate() {
    setTimeout(() => this.adjustPaddings(), 100);
  }

  adjustPaddings() {
    if (!this.inputRef.current) {
      return;
    }

    if (!this.isUpdated) {
      this.isUpdated = true;

      this.forceUpdate();

      return;
    }

    const input = findDOMNode(this.inputRef.current) as HTMLElement;

    if (this.prefixRef.current) {
      const prefix = findDOMNode(this.prefixRef.current) as Element;
      // $FlowIssue
      input.style.paddingLeft = `${prefix.getBoundingClientRect().width + 5}px`;
    }

    if (this.sufixRef.current) {
      const sufix = findDOMNode(this.sufixRef.current) as any;
      // $FlowIssue
      input.style.paddingRight = `${sufix.getBoundingClientRect().width + 5}px`;
    }
  }

  render() {
    const {
      input,
      hint,
      prefix,
      sufix,
      error,
      help,
      inline,
      size,
      className,
    } = this.props;

    const classes = classNames(
      baseClass,
      inline && `${baseClass}--inline`,
      className
    );

    return (
      <div className={classes}>
        {hint && <small className="gc-input__hint">{hint}</small>}

        {prefix && (
          <span className={`${baseClass}__prefix`} ref={this.prefixRef}>
            {cloneElement(prefix)}
          </span>
        )}
        {input && (
          <span className={`${baseClass}__field`}>
            {cloneElement(input, { ref: this.inputRef, size })}
          </span>
        )}
        {sufix && (
          <span className={`${baseClass}__sufix`} ref={this.sufixRef}>
            {cloneElement(sufix)}
          </span>
        )}

        {error && <div className="gc-input__message">{error}</div>}
        {help && !error && <div className="gc-input__help">{help}</div>}
      </div>
    );
  }
}

export default InputGroup;
