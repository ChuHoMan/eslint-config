export function Component1() {
    return <div/>;
  }
  
export function jsx2() {
    const props = {a:1,
    b:2}
    return < a  foo= 'bar' bar={`foo` } >
       <div {...props }
       a={1}
      b="2">Inline Text</div>
      <Component1>
        Block Text
        </Component1>
        <div>
          Mixed
              <div>Foo</div>
            Text<b > Bar</b>
          </div>
          <p>
            foo<i>bar</i><b>baz</b>
          </p>
        </ a >
}

export function jsx3() {
    const children = [];
    const isTrue = true

    if(isTrue) {
        children.push(
        <a>
            hello
        </a>)
    } else if(!isTrue) {
        children.push(<div 
            key="div"
        />)
    }

    return (
        <>
        {children}
        </>
    )
}