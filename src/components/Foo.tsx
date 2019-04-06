import * as React from 'react';

const Foo2: React.FC<{ bar: string }> = () => <div />;

const Bar: React.FC<{ foo: string }> = () => <div />;

const FooBar: React.FC<{ foobar: string }> = (props) => <div />;

function Baz(props: { baz: string }){
  return <div></div>
}

function FooBaz(props: { foobaz: string }){
  return <div></div>
}


export { Foo2, Bar, Baz, FooBar };
export default FooBaz;
