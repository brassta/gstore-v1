import * as React from 'react';

import { FormField } from '@components/Form';
import Button from '@components/Button';
import Filter from '@components/Filter';
import Loader from '@components/Loader';
import Progress, { CircularProgress } from '@components/Progress';
import Tabs from '@components/Tabs';
import Tag from '@components/Tag';
import Slider from '@components/Slider';
import Icon from '@components/Icon';
import IconGame from '@images/icon-game.svg';

const baseClass = 'gc-uidemo';

/* tslint:disable:no-console */

const BaseInputs = () => (
  <section className={`${baseClass}__section ${baseClass}__section--inputs`}>
    <header className={`${baseClass}__header`}>
      <h1 className={`${baseClass}__heading`}>Input Elements</h1>
    </header>

    <div className="gc-layout gc-layout--vr">
      <h3 className={`${baseClass}__title`}>Buttons</h3>

      <div className="gc-layout gc-layout--hr">
        <div className="gc-layout--quarter">
          <h6 className={`${baseClass}__subtitle`}>PRIMARY BUTTON</h6>

          <p>
            <Button type="primary">Active</Button>
          </p>
          <p>
            <Button type="primary" className="gc-button--hover">
              Hover
            </Button>
          </p>
          <p>
            <Button type="primary" disabled>
              Disabled
            </Button>
          </p>

          <h6 className={`${baseClass}__subtitle`}>BUTTON SIZES</h6>

          <p>
            <Button type="primary" size="small">
              Small
            </Button>
          </p>
          <p>
            <Button type="primary" width="full">
              Full width
            </Button>
          </p>
          <p>
            <Button type="primary" size="large">
              Large
            </Button>
          </p>
        </div>

        <div className="gc-layout--quarter">
          <h6 className={`${baseClass}__subtitle`}>SECONDARY BUTTON</h6>

          <p>
            <Button type="secondary">Active</Button>
          </p>
          <p>
            <Button type="secondary" className="gc-button--hover">
              Hover
            </Button>
          </p>
          <p>
            <Button type="secondary" disabled>
              Disabled
            </Button>
          </p>
          {/*<p>*/}
          {/*<Button size="small">*/}
          {/*Small*/}
          {/*</Button>*/}
          {/*</p>*/}
          {/*<p>*/}
          {/*<Button size="large">*/}
          {/*Large*/}
          {/*</Button>*/}
          {/*</p>*/}
          {/*<p>*/}
          {/*<Button width="full">*/}
          {/*Full width*/}
          {/*</Button>*/}
          {/*</p>*/}
          {/*<p>*/}
          {/*<Button color="success">Success</Button>*/}
          {/*<Button color="alert">Alert</Button>*/}
          {/*</p>*/}
          {/*<p>*/}
          {/*<Button color="warning">Warning</Button>*/}
          {/*<Button color="info">Info</Button>*/}
          {/*</p>*/}
          {/*<p style={{ background: 'yellow' }}>*/}
          {/*<Button color="inverse">Inverse</Button>*/}
          {/*</p>*/}
        </div>

        <div className="gc-layout--quarter">
          <h6 className={`${baseClass}__subtitle`}>TERTIARY BUTTON</h6>

          <p>
            <Button type="tertiary">Active</Button>
          </p>
          <p>
            <Button type="tertiary" className="gc-button--hover">
              Hover
            </Button>
          </p>
          <p>
            <Button type="tertiary" disabled>
              Disabled
            </Button>
          </p>

          <h6 className={`${baseClass}__subtitle`}>BUTTON</h6>

          <p>
            <Button>Active</Button>
          </p>
          <p>
            <Button className="gc-button--hover">Hover</Button>
          </p>
          <p>
            <Button disabled>Disabled</Button>
          </p>
          {/*<p>*/}
          {/*<Button type="tertiary" size="small">*/}
          {/*Small*/}
          {/*</Button>*/}
          {/*</p>*/}
          {/*<p>*/}
          {/*<Button type="tertiary" size="large">*/}
          {/*Large*/}
          {/*</Button>*/}
          {/*</p>*/}
          {/*<p>*/}
          {/*<Button type="tertiary" width="full">*/}
          {/*Full width*/}
          {/*</Button>*/}
          {/*</p>*/}
          {/*<p>*/}
          {/*<Button type="tertiary" color="success">Success</Button>*/}
          {/*<Button type="tertiary" color="alert">Alert</Button>*/}
          {/*</p>*/}
          {/*<p>*/}
          {/*<Button type="tertiary" color="warning">Warning</Button>*/}
          {/*<Button type="tertiary" color="info">Info</Button>*/}
          {/*</p>*/}
          {/*<p style={{ background: 'yellow' }}>*/}
          {/*<Button type="tertiary" color="inverse">*/}
          {/*Inverse*/}
          {/*</Button>*/}
          {/*</p>*/}
        </div>

        <div className="gc-layout--quarter">
          <h6 className={`${baseClass}__subtitle`}>OTHER BUTTON TYPES</h6>

          <p>
            <Button type="primary" busy>
              Busy
            </Button>
          </p>

          <p>
            <Button shape="pill">Pill button</Button>
          </p>

          <p>
            <Button type="primary" icon={IconGame} title="Icon button">
              Icon Button
            </Button>
            <Button shape="round" icon={IconGame} title="Round button">
              Round button
            </Button>
            <Button type="ghost" icon={IconGame} title="Ghost button">
              Ghost button
            </Button>
          </p>

          <p>
            <Button type="link">Link button</Button>
          </p>

          <p>
            <Button type="primary" color="success">
              Success
            </Button>
            <Button type="primary" color="alert">
              Alert
            </Button>
          </p>
          <p>
            <Button type="primary" color="warning">
              Warning
            </Button>
            <Button type="primary" color="info">
              Info
            </Button>
          </p>
          <p
            style={{
              background: 'white',
              textAlign: 'center',
              borderRadius: '4px',
            }}>
            <Button color="inverse">Inverse</Button>
          </p>
        </div>
      </div>
    </div>

    <div className="gc-layout gc-layout--vr">
      <h3 className={`${baseClass}__title`}>Inputs</h3>

      <div className="gc-layout gc-layout--hr">
        <div className="gc-layout--third">
          <h6 className={`${baseClass}__subtitle`}>PLAIN INPUT</h6>

          <div>
            <FormField label="Label" placeholder="Placeholder" />
          </div>
          <div>
            <FormField
              label="Label"
              placeholder="Placeholder"
              hint="Hint text"
            />
          </div>
          <div>
            <FormField
              label="Email"
              placeholder="Email"
              value="gnation@gamecredits.com"
            />
          </div>
          <div>
            <FormField type="text" label="Label" value="Disabled" disabled />
          </div>
        </div>

        <div className="gc-layout--third">
          <h6 className={`${baseClass}__subtitle`}>INPUT STATES</h6>

          <div>
            <FormField label="Focused" value="Focused" className="gc-focus" />
          </div>
          <div>
            <FormField
              label="Validation error"
              value="Error"
              status="error"
              message="This is error message"
            />
          </div>
          <div>
            <FormField
              label="Validation success"
              value="Success"
              status="success"
            />
          </div>
        </div>

        <div className="gc-layout--third">
          <h6 className={`${baseClass}__subtitle`}>INPUT VARIATIONS</h6>

          <div>
            <FormField
              type="password"
              label="Password"
              placeholder="Password"
              toggle
            />
          </div>

          <div>
            <FormField
              label="Search input"
              type="search"
              placeholder="Search"
            />
          </div>

          <div>
            <FormField
              label="Composite input"
              prefix={<Icon data={IconGame} />}
              id="idIcon"
              placeholder="Icon"
            />
          </div>
          <div>
            <FormField
              width="full"
              label="Composite input"
              value="0.0123456789"
              hint="Focused label"
              prefix={
                <Button type="tertiary" icon={IconGame}>
                  Icon
                </Button>
              }
              sufix={
                <Button type="tertiary" onClick={() => console.log('Cleared')}>
                  Clear
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </div>

    <div className="gc-layout gc-layout--vr">
      <h3 className={`${baseClass}__title`}>Selects &amp; Togglables</h3>

      <div className="gc-layout gc-layout--hr">
        <div className="gc-layout--quarter">
          <h6 className={`${baseClass}__subtitle`}>SELECT</h6>

          <div>
            <FormField
              type="select"
              label="Label"
              options={{
                '': 'Select...',
                key1: 'Option 1',
                key2: 'Option 2',
              }}
            />
          </div>
          {/*<div>*/}
          {/*<FormField*/}
          {/*type="select"*/}
          {/*label="Label"*/}
          {/*options={{*/}
          {/*'': 'Select...',*/}
          {/*key1: 'Selected',*/}
          {/*key2: 'Option 2',*/}
          {/*}}*/}
          {/*selected="key1"*/}
          {/*/>*/}
          {/*</div>*/}
          <div>
            <FormField
              type="select"
              label="Label"
              options={[
                { value: '', text: 'Select...' },
                { value: 'key1', text: 'Selected' },
                { value: 'key2', text: 'Option 2' },
              ]}
              selected="key1"
            />
          </div>
          <div>
            <FormField
              label="Disabled"
              type="select"
              options={{ disabled: 'Disabled' }}
              disabled
            />
          </div>
        </div>

        <div className="gc-layout--quarter">
          <h6 className={`${baseClass}__subtitle`}>CHECKBOX</h6>

          <div>
            <div>
              <FormField
                type="checkbox"
                name="cbInactive"
                value="Inactive"
                label="Inactive"
              />
            </div>
            <div>
              <FormField
                type="checkbox"
                name="cbChecked"
                value="Selected"
                label="Selected"
                checked
              />
            </div>
            {/* <div> */}
            {/* <FormField */}
            {/* type="checkbox" */}
            {/* name="cbIndeterminate" */}
            {/* value="Indeterminate" */}
            {/* label="Indeterminate" */}
            {/* indeterminate */}
            {/* /> */}
            {/* </div> */}
            <div>
              <FormField
                type="checkbox"
                name="cbDisabled"
                value="Disabled"
                label="Disabled"
                hint="Some hint message..."
                disabled
              />
            </div>
            {/* <div> */}
            {/* <FormField */}
            {/* type="checkbox" */}
            {/* name="cbDisabledIndeterminate" */}
            {/* value="Disabled" */}
            {/* label="Disabled" */}
            {/* indeterminate */}
            {/* disabled */}
            {/* /> */}
            {/* </div> */}
          </div>
        </div>

        <div className="gc-layout--quarter">
          <h6 className={`${baseClass}__subtitle`}>RADIO</h6>

          <div>
            {/* <FormField */}
            {/* type="radio" */}
            {/* name="radioGroup11" */}
            {/* value="Off" */}
            {/* label="Inactive" */}
            {/* /> */}
            {/* <FormField */}
            {/* type="radio" */}
            {/* name="radioGroup11" */}
            {/* value="On" */}
            {/* label="Selected" */}
            {/* selected */}
            {/* /> */}
            {/* <FormField */}
            {/* type="radio" */}
            {/* name="radioGroup11" */}
            {/* value="Idle" */}
            {/* label="Disabled" */}
            {/* hint="Disabled radio button" */}
            {/* disabled */}
            {/* /> */}

            <FormField
              type="radio"
              name="radioGroup1"
              selected="on"
              multiple={[
                { value: 'on', label: 'Selected' },
                { value: 'off', label: 'Inactive' },
                {
                  value: 'idle',
                  label: 'Disabled',
                  hint: 'Some hint message...',
                  disabled: true,
                },
              ]}
              inline={false}
            />

            <FormField
              type="radio"
              name="radioGroup2"
              selected="two"
              multiple={[
                { value: 'one', label: 'One' },
                { value: 'two', label: 'Two' },
                { value: 'three', label: 'Three' },
              ]}
              hint="Hint message..."
            />
          </div>
        </div>

        <div className="gc-layout--quarter">
          <h6 className={`${baseClass}__subtitle`}>SWITCH</h6>

          <div>
            <div>
              <FormField type="switch" name="swOff" label="Off" value="Off" />
            </div>
            <div>
              <FormField
                type="switch"
                name="swOn"
                label="On"
                value="On"
                help
                checked
              />
            </div>
            <div>
              <FormField
                type="switch"
                name="swDisabled"
                label="Disabled"
                value="Disabled"
                hint="Some hint text..."
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="gc-layout gc-layout--vr">
      <h3 className={`${baseClass}__title`}>Miscellaneous</h3>

      <div className="gc-layout gc-layout--hr">
        <div className="gc-layout--third">
          <h6 className={`${baseClass}__subtitle`}>FILTER</h6>

          <Filter
            choices={[
              { value: 'all', label: 'All' },
              { value: 'sent', label: 'Sent' },
              { value: 'received', label: 'Received', disabled: true },
            ]}
            selected="all"
            onChange={(value: any) => console.log(value)}
          />

          <h6 className={`${baseClass}__subtitle`}>TAGS</h6>

          <p>
            <Tag>Default</Tag>
            <Tag type="active">Active</Tag>
            <Tag type="alert">Alert</Tag>
          </p>
          <p>
            <Tag type="success">Success</Tag>
            <Tag type="info">Info</Tag>
            <Tag type="warning">Warning</Tag>
          </p>

          <h6 className={`${baseClass}__subtitle`}>TABS</h6>

          <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
            <Tabs.List>
              <Tabs.Item eventKey={1}>Tab 1</Tabs.Item>
              <Tabs.Item eventKey={2}>Tab 2</Tabs.Item>
              <Tabs.Item eventKey={3}>Tab 3</Tabs.Item>
            </Tabs.List>
            <Tabs.Content>
              <Tabs.Tab eventKey={1}>Tab 1 content</Tabs.Tab>
              <Tabs.Tab eventKey={2}>Tab 2 content</Tabs.Tab>
              <Tabs.Tab eventKey={3}>Tab 3 content</Tabs.Tab>
            </Tabs.Content>
          </Tabs>
        </div>

        <div className="gc-layout--third">
          <h6 className={`${baseClass}__subtitle`}>SLIDER</h6>

          <div>
            <Slider title="Нагрузка" min={1} max={31} value={5} ticks />
          </div>
          <br />
          <br />
          <div>
            <Slider
              title="Нагрузка"
              min={1}
              max={31}
              value={5}
              ticks
              hint="Hint"
            />
          </div>

          <h6 className={`${baseClass}__subtitle`}>LOADER</h6>

          <Loader />
        </div>

        <div className="gc-layout--third">
          <h6 className={`${baseClass}__subtitle`}>PROGRESS</h6>

          <div>
            <Progress value={35} message="Message" />
          </div>

          <h6 className={`${baseClass}__subtitle`}>CIRCULAR PROGRESS</h6>

          <div>
            <p>
              <CircularProgress
                value={0}
                size="small"
                message="0/5 confirmations"
              />
            </p>
            <p>
              <CircularProgress
                value={60}
                size="small"
                message="3/5 confirmations"
              />
            </p>
            <p>
              <CircularProgress value={100} size="small" message="Confirmed" />
            </p>
            <p>
              <CircularProgress
                value={20}
                size="medium"
                message="1/5 confirmations"
              />
            </p>
            {/* <p> */}
            {/* <CircularProgress value={20} size="large" message="1/5 confirmations" /> */}
            {/* </p> */}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BaseInputs;
