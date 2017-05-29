import React from 'React';

export class MainContent extends React.Component {
    constructor(props){
        super(props);
    }
    renderStyle(e){
        return {
            paddingTop: '90px'
        };
    }

    render(){
        const customStyle = {
            paddingTop: '90px'
        };
        return (
            <div className="container body-content" style = {customStyle} >
                {this.props.children}
            </div>
        );
    }
}