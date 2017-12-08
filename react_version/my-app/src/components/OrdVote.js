import React from 'react';
import IndividualOrdinance from './IndividualOrdinance';


export default class OrdVote extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			voted: false,
			buttonColor: 'none'
		};
	}

	highlight() {
		const activeBtn = this.state.buttonColor == 'none' ? 'blue' : 'none';
		this.setState({ buttonColor: activeBtn });
	}

	submitVote(value) {
		// submit form
		// show thank you message
    	this.setState({ voted: true, voteValue: value });
  }

  votingSection() {
  	if (this.state.voted) {
  		return (
  			<form>				
				<h2>Vote on {this.props.title}</h2>					
				<div>
					<div>
						<span><button className='voteButton' style={{backgroundColor: this.state.buttonColor}} onClick={this.highlight, this.submitVote('yes')}>Vote Yes</button></span>
					</div>							
					<div>
						<span><button className='voteButton' style={{backgroundColor: this.state.buttonColor}} onClick={this.highlight, this.submitVote('no')}>Vote No</button></span>
					</div>
				</div>
				<div className='submitButton'><button onClick={() => this.submitVote}>Submit</button></div>
			</form>
  		
	  	)
  	}
	  	return (
			<h1 className='thankYou'>Thank you for voting!</h1>
  		)
  }

	render() {
		return (
			<div>
				{this.votingSection()}
			</div>
		)
	}	
}



// <div><div id="vote-view"><div>test once more</div><div><div><div title="why not">why not</div><span><button>Upvote</button></span></div><div><div title="why yes">why yes</div><span><button>Upvote</button></span></div></div><div><button>Show result</button></div></div></div>