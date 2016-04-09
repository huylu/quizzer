import React from 'react'
import QuizItem from './quiz_item'

export default class QuizTable extends React.Component {
  render() {
    const items = this.props.quizzes.map(q => {
      return (
          <div>
            <QuizItem key={q.id} {...q} />
          </div>
      )
    })

    const inline = {
      'margin': '20px 0'
    }

    return (
        <div style={inline}>
          {items}
        </div>
    )
  }
}

QuizTable.propTypes = {}
