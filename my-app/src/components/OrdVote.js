import React from 'react';
import styles from '../css/OrdVote.css';


export default class OrdVote extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			voted: false
		};
		this.submitVote = this.submitVote.bind(this);
	}


	handleClick(value) {
		this.setState({ voteValue: value });
	}

	submitVote() {
    	this.setState({ voted: true });
  }

  votingSection() {
  	if (this.state.voted===false) {
  		return (
  			<form onSubmit={(e) => e.preventDefault()}>				
				<h2>Vote on {this.props.title}</h2>					
				<div>
					<div>
						<span><button className={this.state.yesActive} onClick={this.yesClicked} onClick={() => this.handleClick('yes')}>I Support This</button></span>
					</div>							
					<div>
						<span><button className={this.state.noActive} onClick={this.noClicked} onClick={() => this.handleClick('no')}>I Do Not Support This</button></span>
					</div>
				</div>
				<div className='submitButton'><button disabled={this.state.voteValue === ''} onClick={this.submitVote}>Submit</button></div>
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