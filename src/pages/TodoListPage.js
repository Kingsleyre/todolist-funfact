import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import TodoCategory from '../components/TodoCategory';

function TodoListPage() {
  return (
    <>
      <Nav />
      <div className="todo-container">
      <TodoCategory title="Morning" />
      <TodoCategory title="Afternoon" />
      <TodoCategory title="Tonight" />
      </div>
      <Footer />
    </>
  );
}

export default TodoListPage;
