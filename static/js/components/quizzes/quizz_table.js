import React from 'react'
import QuizzItem from './quizz_item'
import classnames from 'classnames'

export default class QuizzTable extends React.Component {
  render() {
    const items = this.props.quizzes.map(q => {
      return (
          <div>
            <QuizzItem key={q.id} {...q} />
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

QuizzTable.propTypes = {}
