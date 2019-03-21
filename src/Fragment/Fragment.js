import React from 'react'

/**
 * <></> 是 <React.Fragment/> 的语法糖。
 * <></> 语法不能接受键值或属性。
 * key 是唯一可以传递给 Fragment 的属性。在将来，我们可能增加额外的属性支持，比如事件处理。
 */

function Th() {
  return (
    <>
      <th>id</th>
      <th>name</th>
      <th>score</th>
    </>
  )
}

function Td(props) {
  return (
    <React.Fragment>
      <td>{props.item.id}</td>
      <td>{props.item.name}</td>
      <td>{props.item.score}</td>
    </React.Fragment>
  )
}

function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.desc}</dd>
        </React.Fragment>
      ))}
    </dl>
  )
}

class Fragment extends React.Component {
  render() {
    const arr = [
      {
        id: 1,
        name: 'html',
        score: 90
      },
      {
        id: 2,
        name: 'css',
        score: 80
      },
      {
        id: 3,
        name: 'js',
        score: 100
      }
    ]
    const items = [{ id: 1, term: 3, desc: '3期'}, { id: 2, term: 6, desc: '6期'}, { id: 3, term: 12, desc: '12期'}]
    return (
      <div className="panel">
        <table className="panel">
          <thead>
            <tr>
              <Th></Th>
            </tr>
          </thead>
          <tbody>
            {
              arr.map(item => (
                <tr key={item.id}>
                  <Td item={item}></Td>
                </tr>
              ))
            }
          </tbody>
        </table>
      
        <Glossary items={items}></Glossary>
      </div>
    )
  }
}

export default Fragment
