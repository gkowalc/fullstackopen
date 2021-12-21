import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'

import Blog from './Blog'
test('renders content', () => {
    const blog = {
      title: 'Title1',
      author: 'author1',
      url: 'url1',
      likes: 8
    }
  
    const component = render(
      <Blog blog={blog} />
    )
  
    expect(component.container).toHaveTextContent(
      'Title1'
    )
    expect(component.container).not.toHaveTextContent(
        'url1'
      )
      
  })

  test('check if view window shows url and likes', () => {
    const blog = {
      title: 'Title1',
      author: 'author1',
      url: 'url1',
      likes: 8
    }
  
    const component = render(
      <Blog blog={blog}/>
    )
    const button = component.getByText('view')
    fireEvent.click(button)
  
    expect(component.container).toHaveTextContent(
      'Title1'
    )
    expect(component.container).toHaveTextContent(
        'url1'
      )
      
  })
  test('ensures that if the like button is clicked twice,', () => {
    const mockHandler = jest.fn()
    const blog = {
      title: 'Title1',
      author: 'author1',
      url: 'url1',
      likes: 8
    }

    const component = render(
      <Blog blog={blog}  toggleImportance={mockHandler}/>
    )
    const button = component.getByText('view')
    fireEvent.click(button)
  
    const button2 = component.getByText('like')
    fireEvent.click(button2)
   
    expect(mockHandler.mock.calls).toHaveLength(1)
  })