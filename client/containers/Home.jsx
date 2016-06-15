import React, { Component } from 'react';
import Slider from 'uinz-slider';
import Input from 'react-toolbox/lib/input';



import { AppBar, Checkbox, IconButton, Layout, NavDrawer, Panel, Sidebar} from 'react-toolbox'
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';

const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

const images = [
    'https://scontent.xx.fbcdn.net/v/t1.0-9/13418686_983251761766723_5437293422005617330_n.jpg?oh=c954e0714e1c0b9bbc26444367844197&oe=57C4C43A'
  ];

state = { name: '', phone: '', email: '', hint: '' };

handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };


const TestCards = () => (
  <Card style={{width: '750px',height: '750px',float: 'none', margin: '0 auto'}}>
    <CardTitle
      avatar="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/13428616_983123365112896_7679498001466084762_n.jpg?oh=eaf3a6a45c83c63203858af9108ac5d5&oe=58007943"
      title="Lexie Lexter"
      subtitle="Ciudad de Mexico"
    />

    <CardTitle
      title="What do you think about this Wikipedia draft?"
      subtitle="The Tale of the Pie and the Patty-Pan"
    />
  <Slider images={images} auto={true} autoTime={100000}/>
    <CardText>
      <Input type='text' label='Write your comments:' name='name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} />
    </CardText>
    <CardActions>

      <Button style={{float: 'right'}} label="DENY" />
      <Button style={{float: 'right'}} label="APPROVE" />

    </CardActions>
  </Card>
);


export default class HomePage extends Component {

  constructor(props) {
		super(props);

		this.onApproveClick = (e) => {
			e.preventDefault();
			e.stopPropagation();
			Meteor.logout();
		}
	}

	render() {
		return (
      <Layout>
        <NavDrawer>
            <p>
                Navigation, account switcher, etc. go here.
            </p>
        </NavDrawer>
        <Panel>
            <AppBar><IconButton icon='menu' inverse={ true } /></AppBar>
            <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
                <TestCards />

            </div>
        </Panel>
        <Sidebar width={ 5 }>
            <div><IconButton icon='close' /></div>
            <div style={{ flex: 1 }}>
                <p>Supplemental content goes here.</p>

            </div>
        </Sidebar>
      </Layout>
		);
	}
}
