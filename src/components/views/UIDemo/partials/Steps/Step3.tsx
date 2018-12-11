import * as React from 'react';

import { FormField } from '@components/Form';

/* tslint:disable:no-console */

export default class Step3 extends React.Component<any> {
  state = {
    data: 'Step3 data',
  };

  /**
   * This function will be triggered by the Stepper component (if defined)
   *
   * @returns {boolean}
   */
  submit = () => {
    console.log('Step3.submit()');

    // const result = true;
    const result = this.someRequest();

    return result;
  };

  someRequest() {
    return new Promise(resolve => {
      console.log('sending...');
      setTimeout(() => {
        const isValid = true;
        this.setState(state => ({ ...state, data: 'Step 3 modified data' }));
        console.log('...done', isValid);
        resolve(isValid);
      }, 2000);
    });
  }

  /**
   * We can explicitly move to a step (zero based index)
   * Stepper component injects this jumpToStep function into each component
   *
   */
  jumpToStep = (event: any) => {
    event.preventDefault();
    this.props.jumpToStep(1);
  };

  render() {
    // console.log('Step3', this.props);
    return (
      <div className="Step3">
        <h4>Verify your phrase</h4>
        <p className="gc-text--secondary">
          Write this 12-word mnemonic phrase down and keep it somewhere safe.
          Don't lose it! Without your mnemonic phrase, you can't access your
          wallet and we can't help you.
        </p>
        <p>
          <a href="#" onClick={this.jumpToStep}>
            Go back to previous step
          </a>
        </p>
        <form>
          <section className="gc-layout gc-layout--hr gc-layout--wrap gc-layout--even">
            <FormField width="auto" />
            <FormField width="auto" />
            <FormField width="auto" />
            <FormField width="auto" />
          </section>

          <section className="gc-layout gc-layout--hr gc-layout--wrap gc-layout--even">
            <FormField width="auto" />
            <FormField width="auto" />
            <FormField width="auto" />
            <FormField width="auto" />
          </section>

          <section className="gc-layout gc-layout--hr gc-layout--wrap gc-layout--even">
            <FormField width="auto" />
            <FormField width="auto" />
            <FormField width="auto" />
            <FormField width="auto" />
          </section>
        </form>
      </div>
    );
  }
}
