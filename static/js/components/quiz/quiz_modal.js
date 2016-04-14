import React from 'react'

export default class QuizModalView extends React.Component {
  render() {
    const {quiz} = this.props
    const {questions} = quiz
    const inline = {
      'margin': '20px 0'
    }

    let questionList = null
    if (questions != null && questions.length > 0) {
      let i = 1;
      questionList = questions.map(q => {
        return (
            <div className="list-group">
              <a href="#" className="list-group-item">
                <h4 className="list-group-item-heading">
                  Question {i++}
                </h4>
                <p className="list-group-item-text">
                  {q.content}
                </p>
              </a>
            </div>
        )
      })
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
                    placeholder="title" defaultValue={quiz.name}/>
              </div>
              <div className="form-group">
                <label for="name">Description</label>
                <input
                    type="text"
                    id="description"
                    className="form-control"
                    placeholder="description" defaultValue={quiz.description}/>
              </div>
              <div className="form-group">
                {questionList}
              </div>
            </fieldset>
          </form>
        </div>
    )
  }
}

QuizModalView.propTypes = {}
