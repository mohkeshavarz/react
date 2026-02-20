import styled from 'styled-components'

let ProfileDiv = styled.div
`
display:flex;
align-items:center;
background-color: #f4f4f4;
border-radius:10px;
max-width:600px:
padding:20px:
box-shadow: 0px 4px 8px rgba(0,0,0,0.2);

@media(max-width: 768px){
flex-direction: column}

`

let ProfilePicture =styled.img
`
width: 150px:
height: 150px;
border-radius:50%;
margin-right:20px;
`

let DetailsDiv = styled.div
`
display:flex;
flex-direction:column;
align-item:flex-start;

h2{
font-size:25px
}

p{
font-size:15px:
}
`

export default function StyleComponent(){
    return(
        <div>
            <ProfileDiv>
                <ProfilePicture src="https://placehold.co/150"/>
                <DetailsDiv>
                    <h2>Mohsen Keshavarz</h2>
                    <p>IT Technology</p>
                </DetailsDiv>
            </ProfileDiv>
        </div>
    )

}