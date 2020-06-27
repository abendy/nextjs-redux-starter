import React from 'react'
import Immutable from 'immutable'
import { render } from 'test-utils'
import ApiResponse from 'components/ApiResponse'

describe('Components::ApiResponse', () => {
  let props
  beforeEach(() => {
    props = {
      orgs: Immutable.fromJS({
        id: 'id',
        totalCount: 2,
        items: [{
          id: 1,
          displayName: 'org 1'
        }, {
          id: 2,
          displayName: 'org 2'
        }]
      })
    }
  })

  const setup = () => {
    const utils = render(<ApiResponse {...props} />)
    return utils
  }

  it('renders all items', () => {
    const utils = setup()
    props.orgs.get('items').forEach((org) => {
      expect(utils.getByText(org.get('displayName'))).toHaveAttribute(
        'href',
        `org/${org.get('id')}`
      )
    })
  })
})
