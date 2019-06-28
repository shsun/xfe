import React, {Component} from 'react'
import {Panel, FieldSet, Container, Button} from '@sencha/ext-classic';


import {ExtReact} from '@sencha/ext-react'


//import {Signal, SignalBinding} from 'signals';

import {Signal} from "@robotlegsjs/signals";


//import { FormPanel, SelectField } from '@sencha/ext-modern';

//Ext.require('Ext.Toast');
import {Grid, Column} from '@sencha/ext-classic';


/**
 *
 */
export default class App extends Component {

    signal4XXX = new Signal();
    /**
     *
     * @param {Ext.Button} button
     * @param {Ext.event.Event} e
     */
    toggleRound(button, e, additionalOpts) {
        const me = this;

        console.log('???--' + e.getX());
        console.log('!!!---->>>' + JSON.stringify(additionalOpts));

        me.signal4XXX.add(Ext.bind(me._onClicked, me, [{aa: '123', bb: '456'}], true));


        me.signal4XXX.dispatch({message: "hello signal!"});
        console.log('???--' + e.getX());
    }


    /**
     *
     * @param data
     * @param additionalObject
     * @private
     */
    _onClicked(data, additionalObject) {
        console.log(data.message + "----" + additionalObject.aa);
    }


    render() {
        const me = this;

        const f = Ext.bind(me.toggleRound, me, [{aa: '123', bb: '456'}], true);

        return (
            <Container layout="fit" padding={10} fullscreen>
                <Panel title="管理系统" bodyPadding={10} shadow>


                    <Button text="Round" handler={f}/>


                    <FieldSet title={"HTML inside - not working"}>
                        <Panel height={80} border={true} title={"HTML inside"}>
                            <div>
                                html inside <strong>Panel</strong>
                                <Panel title="ExtReact panel" bodyPadding={10} shadow></Panel>
                            </div>
                        </Panel>
                    </FieldSet>
                </Panel>
            </Container>
        )
    }
}