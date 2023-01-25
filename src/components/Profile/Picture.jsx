import styled from "styled-components";

import defaultPhoto from "../../assets/images/defaultProfile.jpg";

export default function Picture({...props}){
  const photo = props.photo ? props.photo : defaultPhoto

  return(
    <PictureWrapper>
      <Image>
        <img src={photo} alt='Profile picture' />
      </Image>
      <ChangePicture onClick={()=> alert('hello')}>
        Trocar foto
      </ChangePicture>
    </PictureWrapper>
  )
}

const PictureWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Image = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid #796AA1;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    width: 140px;
    height: 140px;
    border-radius: 50%;
    object-fit: cover;
  }
`

const ChangePicture = styled.div`
  margin-top: 5px;
  color: #B1B1B1;
  font-size: 12px;
`