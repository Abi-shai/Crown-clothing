import styled from 'styled-components'

export const BaseButton = styled.button`
    font-size: 16px;
    background-color: black;
    padding: .5em 2em;
    border: none;
    color: white;
    border: 2px solid white;
    cursor: pointer;
    transition: 750ms cubic-bezier(0.25, 0.45, 0.45, 0.95);

    &:hover{
        background-color: white;
        border: 2px solid black;
        color: black;
        transition: 750ms cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
`

export const GoogleSignInButton = styled(BaseButton)`
    font-size: 16px;
    background-color: rgb(0, 71, 148);
    padding: .5em 2em;
    border: none;
    color: white;
    border: 2px solid black;
    cursor: pointer;
    transition: 750ms cubic-bezier(0.25, 0.45, 0.45, 0.95);

    &:hover{
        background-color: white;
        border: 2px solid black;
        color: black;

        transition: 750ms cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
`

export const InvertedButton = styled(BaseButton)`
    font-size: 16px;
    background-color: white;
    padding: .5em 2em;
    border: none;
    color: black;
    border: 2px solid black;
    cursor: pointer;
    transition: 750ms cubic-bezier(0.25, 0.45, 0.45, 0.95);

    &:hover{
        background-color: black;
        border: 2px solid white;
        color: white;
        transition: 750ms cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
`


// .button-container {
//     font-size: 16px;
//     background-color: black;
//     padding: .5em 2em;
//     border: none;
//     color: white;
//     border: 2px solid white;
//     cursor: pointer;
//     transition: 750ms cubic-bezier(0.25, 0.45, 0.45, 0.95);

//     &:hover{
//         background-color: white;
//         border: 2px solid black;
//         color: black;
//         transition: 750ms cubic-bezier(0.25, 0.45, 0.45, 0.95);
//     }
// }

// .google-sign-in{
//     font-size: 16px;
//     background-color: rgb(0, 71, 148);
//     padding: .5em 2em;
//     border: none;
//     color: white;
//     border: 2px solid black;
//     cursor: pointer;
//     transition: 750ms cubic-bezier(0.25, 0.45, 0.45, 0.95);

//     &:hover{
//         background-color: white;
//         border: 2px solid black;
//         color: black;

//         transition: 750ms cubic-bezier(0.25, 0.45, 0.45, 0.95);
//     }
// }

// .inverted{
//     font-size: 16px;
//     background-color: white;
//     padding: .5em 2em;
//     border: none;
//     color: black;
//     border: 2px solid black;
//     cursor: pointer;
//     transition: 750ms cubic-bezier(0.25, 0.45, 0.45, 0.95);

//     &:hover{
//         background-color: black;
//         border: 2px solid white;
//         color: white;
//         transition: 750ms cubic-bezier(0.25, 0.45, 0.45, 0.95);
//     }
// }