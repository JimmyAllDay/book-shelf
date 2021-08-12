import React, {Component} from 'react'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
    constructor(props){
                super()
    }





    render() {
        console.log(this.props)
        const {image, title, authors} = this.props
        return ( 
                <li>
                    <div className="book">
                        <div className="book-top">
                        <div className="book-cover" 
                            style={{ 
                                width: 128, 
                                height: 193, 
                                backgroundImage: `url("${image}")`
                                }}
                                ></div>
                            <BookShelfChanger
                                id={this.props.id} 
                                bookShelfHandler={this.props.bookShelfHandler}
                                />
                        </div>
                        <div className="book-title">{title}</div>
                        <div className="book-authors">{authors}</div>
                    </div>
                </li>
            )
        }
}

export default Book