import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { BlogForm } from './BlogForm'


test('test for new blog form', () => {
  const createBlog = jest.fn()

  const component = render(<BlogForm createBlog={createBlog} />)

  const form = component.container.querySelector('form')
  const title = component.container.querySelector('#title')
  const author = component.container.querySelector('#author')
  const url = component.container.querySelector('#url')

  fireEvent.change(title, {
    target: { value: 'Title' },
  })

  fireEvent.change(author, {
    target: { value: 'Name' },
  })

  fireEvent.change(url, {
    target: { value: 'www.test.com' },
  })

  fireEvent.submit(form)

  expect(createBlog.mock.calls[0][0].title).toBe('Title')
  expect(createBlog.mock.calls[0][0].author).toBe('Name')
  expect(createBlog.mock.calls[0][0].url).toBe('www.test.com')
})