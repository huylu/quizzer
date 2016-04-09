import React from 'react'

export default class QuizModalView extends React.Component {
  constructor(props) {
    super(props)
    this.state = props.quiz
  }

  render() {
    const inline = {
      'margin': '20px 0'
    }

    return (
        <div style={inline}>
          <form>
            <fieldset disabled>
              <div className="form-group">
                <label for="name">Title</label>
                <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder={this.state.name}/>
              </div>
              <div className="form-group">
                <label for="name">Description</label>
                <input
                    type="text"
                    id="description"
                    className="form-control"
                    placeholder={this.state.description}/>
              </div>
            </fieldset>
          </form>
        </div>
    )
  }
}
