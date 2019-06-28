import React, {Component} from 'react'
import {ExtReact, Panel, FieldSet, Container, Button} from '@sencha/ext-classic';



export default class GridApp extends Component {



    render() {
        return (


            <Container layout="fit" padding={10} fullscreen>



                <Panel title="ExtReact" bodyPadding={10} shadow>
                    <FieldSet title={"HTML inside - not working"}>
                        <Panel height={80} border={true} title={"HTML inside"}>
                            <div>
                                html inside <strong>Panel</strong>
                                <Panel title="ExtReact" bodyPadding={10} shadow></Panel>
                            </div>
                        </Panel>
                    </FieldSet>

                </Panel>


            </Container>


        )
    }


}
