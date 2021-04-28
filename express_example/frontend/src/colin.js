import React, {Component} from 'react';

class Colin extends Component {

    state = { name: ""}

    componentDidMount() {

        fetch('/displaycolin')
            .then(this.setState(name => name.name ));
    }

    render(){
        <>
            {this.state.name}
        </>
    return
    };
    
}
export default Colin;