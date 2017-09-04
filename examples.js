// Example documentation:

/**
 * # This is my Button that contains a [Link](#) or a [Function](#).
 * 
 * @example 
 *  import App from 'grommet/components/App';
 * 
 * <App>
 *   {contents}
 * </App>
 */

export default class Button extends Component {
    //just a demo component for reference 
    constructor () {
        super();
        this._onClick = this._onClick.bind(this);
        this._onMouseDown = this._onMouseDown.bind(this);
        this._onMouseUp = this._onMouseUp.bind(this);
        this._onFocus = this._onFocus.bind(this);
        this._onBlur = this._onBlur.bind(this);
        this.state = {
            mouseActive: false,
            focus: false
        };
    }
    render() {
        return <button>whatever</button> 
    }
}

Button.propTypes = {
    a11yTitle: PropTypes.string,
    /**
     * @property {PropTypes.bool} accent - Whether this is an accent button.
     */
    accent: PropTypes.bool,
    align: PropTypes.oneOf(['start', 'center', 'end']),
    /**
     * @property {background|PropTypes.object} hoverIndicator - Optional. The hover indicator to apply when the user is mousing over the button. An object can be also be specified for color index support: {background: 'neutral-2'}. This prop is meant to be used only with plain Buttons.
     */
    hoverIndicator: PropTypes.oneOfType([
      PropTypes.oneOf(['background']),
      PropTypes.shape({
        background: PropTypes.oneOfType([
          PropTypes.bool,
          PropTypes.string
        ])
      })
    ]),
    /**
     * @property {PropTypes.string} href - If specified, the button will behave like an anchor tag.
     */
    href: PropTypes.string,
    /**
     * @property {PropTypes.element} icon - Icon element to place in the button. See Icon.
     */
    icon: PropTypes.element,
    /**
     * @property {PropTypes.node} label - Label text to place in the button.
     */
    label: PropTypes.node,
    /**
     * @property {['push', 'replace']} method - Valid only when used with path. Indicates whether the browser history should be appended to or replaced. The default is push.
     */
    method: PropTypes.oneOf(['push', 'replace']),
    /**
     * @property {PropTypes.func} onClick - Click handler. Not setting this property and not specifying a path causes the Button to be disabled.
     */
    onClick: PropTypes.func,
    /**
     * @property {['button', 'reset', 'submit']} type - The type of button. Set the type to submit for the default button on forms. Defaults to button.
     */
    type: PropTypes.oneOf(['button', 'reset', 'submit']),
    /**
    * @property {PropTypes.object[]} links - An array of: {ids: [<id>, ...], colorIndex: <string>}. The ids should reference id properties of contained Topology.Part components.
    */
    links: PropTypes.arrayOf(
        PropTypes.shape({
        colorIndex: PropTypes.string,
        ids: PropTypes.arrayOf(PropTypes.string).isRequired
        })
    ),
     /**
   * @property {PropTypes.object} data - An array of objects describing the data.
   */
    data: PropTypes.shape({
        categories: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.node,
        items: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            node: PropTypes.node
        }))
        })),
        links: PropTypes.arrayOf(PropTypes.shape({
        childId: PropTypes.string.isRequired,
        colorIndex: PropTypes.string,
        parentId: PropTypes.string.isRequired
        }))
    }).isRequired,
    /**
     * @property {auto|xsmall|small|medium|large|xlarge|xxlarge|full|PropTypes.object} size - The width of the Box. Defaults to auto. An object can be specified to distinguish width, height (with additional min and max options for width and height). E.g. {height: small, width: {max: large}}.
     */
    size: PropTypes.oneOfType([
        PropTypes.oneOf(['auto', 'xsmall', 'small', 'medium', 'large',
        'xlarge', 'xxlarge', 'full']), 
        PropTypes.shape({
        height: PropTypes.oneOfType([
            PropTypes.oneOf(SIZES),
            PropTypes.shape({
            max: PropTypes.oneOf(FIXED_SIZES),
            min: PropTypes.oneOf(FIXED_SIZES)
            })
        ]),
        width: PropTypes.oneOfType([
            PropTypes.oneOf(SIZES),
            PropTypes.shape({
            max: PropTypes.oneOf(FIXED_SIZES),
            min: PropTypes.oneOf(FIXED_SIZES)
            })
        ])
        })
    ])
  };
  