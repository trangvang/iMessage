import React from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.signIn = this.signIn.bind(this);
        this.signUp = this.signUp.bind(this);
        this.state = {
            userName: ""
        }
        this.changeUserName = this.changeUserName.bind(this);

    }

    changeUserName(event){
        this.setState({
            userName: event.nativeEvent.text

        })
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.screenProps.connection.isLogin){
            this.props.navigation.navigate("chatFlow");
        }
    }

    signIn() {
        this.props.screenProps.login(this.state.userName);
        
    }

    signUp() {
        this.props.navigation.navigate("chatFlow")
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TextInput style={styles.input} placeholder='Input Username' onChange = {this.changeUserName} />
                <Button title='Sign In' onPress={this.signIn} />
                <Button title='Or Sign Up' onPress={this.signUp} />
            </View>
        );
    }
}

export default Login

const styles = StyleSheet.create({
    input: {
        width: 250,
        height: 30,
        color: 'blue',
        fontSize: 15,
        borderWidth: 1,
    },

});