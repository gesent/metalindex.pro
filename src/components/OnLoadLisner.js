import React from 'react';
import $ from 'jquery';
class OnLoadLisner extends React.Component {
    constructor(props) {
       super(props);
       this.handleLoad = this.handleLoad.bind(this);
    }
   
    componentDidMount() {
       window.addEventListener('load', this.handleLoad);
    }
   
    componentWillUnmount() { 
      window.removeEventListener('load', this.handleLoad)  
    }
   
    handleLoad() {

            $('.'+ window.cLang).addClass('langActive');
            console.log('INITIAL' + window.cLang);
            console.log('INITIAL' + $('.'+ window.cLang).length);

    }
   }
   export default OnLoadLisner;