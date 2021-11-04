// var Search = (props) => (
//   <div className="search-bar form-inline">
//     <input className="form-control" type="text" onChange={props.getSearch}/>
//     <button className="btn hidden-sm-down" onClick={props.getSearch}>
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div>
// );
// we use onChange instead of onKeyPress to only update on change instead of any keypress event


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = props.getSearch;
    this.onClick = props.getSearch;
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onChange={this.getSearch}/>
        <button className="btn hidden-sm-down" onClick={this.getSearch}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
