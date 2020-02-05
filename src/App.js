import React, {Component} from 'react';
import './App.css';

let images = [{url: 'https://cdn.motor1.com/images/mgl/8bpn2/s1/2018-porsche-911-gt3-rs.jpg', title:'Porsche GT3 RS', caption: 'Beautiful green GT3'},
{url: 'https://2p2bboli8d61fqhjiqzb8p1a-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/Porsche-918-Spyder-11-1.jpg', title: 'Porsche 918 Spyder', caption: 'This Porsche sells for over 1M USD'},
{url: 'https://cdn.bringatrailer.com/wp-content/uploads/2019/03/1977_porsche_911_carrera_3-0_1558726288c0ffb79BE0BBBF-9ED7-40BC-97D6-5AC85CF566C0-940x698.jpg', title: 'Porsche Carrera 3.0', caption: 'A beautiful Porsche from the late 70\'s'}]

function ImageList(props) {

  let images = props.images.map((image, index) => (

    <React.Fragment key={index}>
       <li>
        <img src={image.url} alt='submitted' /> 
        <h2>{image.title}</h2>
        <p>{image.caption}</p>
       </li> 
    </React.Fragment>

  ));

  return (
    <ul> {images} </ul>
  )
}




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
    this.newImage = this.newImage.bind(this);
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

// class ImageList extends Component {
//   render() {
//     return(
//       <ul>
//         <li> <img src='{this.state.url}' alt='submitted' /> </li>
//         <li> <h2>{this.state.title}</h2> </li>
//         <li> <p>{this.state.caption}</p> </li>
//       </ul>
//     )
//   }
// }

class ImageBoard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      images: []
    }

    this.newImage = this.newImage.bind(this);
  }

  componentDidMount() {
    this.setState({images})
  }

  newImage(image) {
    let images = [...this.state.images];
    images.push(image);
    this.setState({images});
  }

  render() {
    return(
      <div>
        <ImageForm newImage={this.newImage}/>
        <ImageList images={this.state.images}/>
      </div>
    )
  }
}

export default ImageBoard;
