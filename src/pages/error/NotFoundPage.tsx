import React from 'react'
import styled from 'styled-components'
import type { RouteComponentProps } from 'react-router-dom'

const NotFoundPage: React.FC<RouteComponentProps> = () => {
  return (
    <Container>
      <p>ไม่พบหน้าที่คุณมองหา</p>
      <p>กรุณาตรวจสอบ URL ของคุณ หรือติดต่อ Admin</p>
    </Container>
  )
}

export default NotFoundPage

const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > p {
    line-height: 1;
    font-size: 20px;
  }
`
