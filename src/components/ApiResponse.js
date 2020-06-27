import React from 'react'
import styled from 'styled-components'
import { Map } from 'immutable'
import PropTypes from 'prop-types'

const Container = styled.div`
  width: 300px;
  padding: 1em;
  margin: 1em auto;
`
const List = styled.ul`
  padding: 0;
`
const Item = styled.li`
  background: #eee;
  list-style: none;
  margin: 1px;
  padding: 4px;
  :hover {
    a {
      color: #eee;
    }
    background: ${props => props.theme.colors.primary};
  }
`

const ApiResponse = ({ orgs }) => {
  return (
    <Container>
      <List>
        {
          orgs.get('items').map(item => (
            <Item key={item.get('id')}>
              <a href={'org/' + item.get('id')}>
                { item.get('displayName') }
              </a>
            </Item>
          ))
        }
      </List>
    </Container>
  )
}

ApiResponse.propTypes = {
  orgs: PropTypes.instanceOf(Map).isRequired
}

export default ApiResponse
