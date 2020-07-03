import React from "react"
import useColors from "../../hooks/useColors"
import { CODING_FONT } from "../../assets/styles/fonts"

const PostStyle = () => {
  const colors = useColors()
  return (
    <style>
      {`p {
font-size: 0.9rem;
margin-top: 1.5rem;
line-height: 1.5rem;
font-weight: 400;
letter-spacing: 0.03rem;
}
strong {
color: ${colors.color2};
font-weight: 600;
font-size: 1.1rem;
}
strong em {
  font-size: 1rem;
  font-weight: 300;
}
ol {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
li {
  line-height: 1.5rem;
  margin-top: 1rem;
  margin-left: 24px;
}
blockquote {
  line-height: 1.5rem;
  font-style: italic;
  color: ${colors.color3};
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
}
h2 {
color: ${colors.color2};
font-weight: bold;
font-size: 1.7rem;
margin-top: 2rem;
}
h3 {
color: ${colors.color2};
font-weight: bold;
font-size: 1.3rem;
margin-top: 2rem;
}
h4 {
color: ${colors.color2};
font-weight: bold;
font-size: 1.1rem;
margin-top: 2rem;
}
code {
  background-color: ${colors.color5};
  color: ${colors.color2};
  border-radius: 5px;
  padding: 2px;
  font-family: ${CODING_FONT};
}
a {
  color: ${colors.color4};
  text-decoration: underline;
}
a:hover {
  color: ${colors.color3};
}
p small {
  color: ${colors.color3};
  font-size: 0.75rem;
  text-align: center;
  display: block;
}
`}
    </style>
  )
}

export default PostStyle
