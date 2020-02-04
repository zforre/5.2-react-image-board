import React, {Component} from 'react';
import './App.css';

class ImageForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      title: '',
      caption: ''
    }

    this.handleUrl = this.handleUrl.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleCaption = this.handleCaption.bind(this);
  }

  handleUrl(event) {
    this.setState({url: event.target.value});
  }

  handleTitle(event) {
    this.setState({title: event.target.value});
  }

  handleCaption(event) {
    this.setState({caption: event.target.value})
  }

  newImage(event) {
    event.preventDefault();
    this.props.newImage({url: this.state.url, title: this.state.title,
    caption: this.state.caption})
  }

  render() {

    return(
      <form>
        <div className='new-image'>
          <input type="text" className="new-img-url" placeholder="New Image URL" value={this.state.url} onChange={this.handleUrl}/>
          <input type="text" className="new-title" placeholder="New Image Title" value={this.state.title} onChange={this.handleTitle} />
          <input type="text" className="new-caption" placeholder="New Image Caption" value={this.state.caption} onChange={this.handleCaption}/>
          <button className="btn submit" type="submit" onClick={this.newImage}>Add Image</button>
        </div>
      </form>
    )
  }
}

class ImageList extends Component {
  render() {
    return(
      <ul>

      </ul>
    )
  }
}

class ImageBoard extends Component {
  render() {
    return(
      <div>
        <ImageForm />
        <ImageList />
      </div>
    )
  }
}

export default ImageBoard;
