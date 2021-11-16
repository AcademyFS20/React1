import React from "react";
import "./index.css";

class Form extends React.Component {
  state = {
    username: "",
    password: ""
  };

  setValue = fieldName => evt =>
    this.setState({ [fieldName]: evt.target.value });

  render() {
    const { bookname, authorname,o } = this.state;
    return (
      <div className="container px-8 py-12 h-screen bg-gray-100 m-z">
          <h4>Book Info</h4>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto sm:max-w-xl">
          <div className="m-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="bookname"
            >
              Book name
            </label>
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="text"
              id="bookname"
              onChange={this.setValue("bookname")}
              value={bookname}
              placeholder="Book name"
            />
          </div>
          <div className="m-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="authorname"
            >
              Author name
            </label>
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              id="authorname"
              onChange={this.setValue("authorname")}
              value={authorname}
              type="authorname"
              placeholder="Author name"
            />
          </div>
          <div className="m-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="authorname"
            >
              
            </label>
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              id="authorname"
              onChange={this.setValue("o")}
              value={o}
              type="o"
              placeholder="o"
            />
          </div>
          <div className="m-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="categories"
            >
             Categories 
            </label>
            <select
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              id="categories"
              onChange={this.setValue("categories")}
              value={categories}
              type="categories"
              
            />
            <option value="FantasyV" selected="selected">FantasyV</option>
            <option value=""></option>
            <option value=""></option>
            
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          {JSON.stringify(this.state)}
        </p>
       
      </div>
    );
  }
}

export default Form
