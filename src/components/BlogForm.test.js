import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { prettyDOM } from '@testing-library/react'
import BlogForm from './BlogForm'


test('<BlogForm /> updates parent state and calls onSubmit', () => {



const createBlog = jest.fn()
const message = jest.fn()

const component = render(
  <BlogForm prop2={createBlog} message={message} />
)

const input = component.container.querySelector('#Title1')

const form = component.container.querySelector('#submit')

fireEvent.change(input, { 
  target: { value: 'testing of forms could be easier' } 
})
fireEvent.change(input, { 
    target: { value: 'password' } 
  })
fireEvent.submit(form)
component.debug()
expect(createBlog.mock.calls[0][0].content).toBe('testing of forms could be easier' )

})
