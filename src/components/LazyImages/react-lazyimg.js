//import './style.scss';
import React,{PropTypes} from 'react';
import classNames from 'classnames';
import noop from 'noop';

export default class LazyImging extends React.Component{

  static propTypes = {
    title:PropTypes.string,
    url:PropTypes.string,
    placeholder:PropTypes.string,
    effect:PropTypes.oneOf(['replace', 'fade']),
    onLoad:PropTypes.func,
    onClick:PropTypes.func,
    style:PropTypes.object
  };

  static defaultProps = {
    onLoad:noop,
    onClick:noop,
    effect:'replace',
    style:{}
  };

  constructor(props) {
    super(props);
    this.initialState();
  }

  initialState(){
    const {url} = this.props;
    this.state = {
      loaded:false,
      url
    };
  }

  componentWillReceiveProps(nextProps){
    if(this.props.url!==nextProps.url){
      this.initialState();
      this.setState(nextProps)
    }
  }


  getChildren(){
    const {effect} = this.props;
    switch(effect){
      case 'replace':
        return this.getReplaceChildren();
      case 'fade':
        return this.getFadeChildren();
    }
    return null;
  }

  getReplaceChildren(){
    const {url,placeholder,title,className,effect,style,onClick} = this.props;
    let target = placeholder || url;

    return (
      <img
      data-effect={effect}
      className={classNames('react-lazyimg',className)}
      src={target} title={title}
      style={style}
      onClick={onClick}
      onLoad={this._onReplace.bind(this)} />
    );
  }

  getFadeChildren(){
    const {title,effect,className,style,onClick} = this.props;
    const {url} = this.state;
    return (
      <img
      data-effect={effect}
      className={classNames('react-lazyimg',className)}
      data-src={url}
      src={url} title={title}
      style={style}
      onClick={onClick}
      onLoad={this._onFade.bind(this)} />
    );
  }


  _onReplace(inEvent){
    const {url,placeholder,onLoad} = this.props;
    const dom = inEvent.target;
    const {loaded} = this.state;
    if(!loaded && placeholder){
      this.setState({loaded:true},()=>{
        dom.src=url;
        onLoad.call(this,inEvent);
      });
    }
  }

  _onFade(inEvent){
    const {onLoad} = this.props;
    const dom = inEvent.target;
    const {loaded,url} = this.state;
    if(!loaded){
      this.setState({loaded:true},()=>{
        dom.removeAttribute('data-src');
        onLoad.call(this,inEvent);
      });
    }
  }


  render(){
    return this.getChildren();
  }
}
