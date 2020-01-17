import React from 'react';



// 内部拡張をしていく
// フォームを作成していく
class SearchBar extends React.Component {
    state = { term: ''};

    


// ここの部分で文字の変換も行う
// ここの部分で作成をしていく
    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                            />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;