import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";
import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    // Arrange
    render(<App />);
  
    // Act
    const topLevelHeading = screen.getByRole("heading", {
      name: /hi, i'm/i,
      exact: false,
      level: 1,
    });
  
    // Assert
    expect(topLevelHeading).toBeInTheDocument();
  });
  test(" displays an image of yourself with alt text identifying the content of the image",()=>{
    render(<App/>)
    const image=screen.getByAltText(/Bruce Serede/i);

    expect(image).toBeInTheDocument()

  })

  test("displayssecond-level heading with the text `About Me`",()=>{
    render(<App/>)
    const secondLevelHeading=screen.getByRole("heading",{
        name: /About me/i,
        exact:false,
        level:2
    })
    expect(secondLevelHeading).toBeInTheDocument()
   
  })

  test("displays a paragraph for your biography",()=>{
    render(<App/>)
    const paragraph= screen.getByText(/I am a/i)

    expect(paragraph).toBeInTheDocument()
  })
  test("displays link to your Github page",()=>{
    render(<App/>)

    const gitHubLink=screen.getByRole("link",{
        name:/github/i,
        exact:false
    })
    expect(gitHubLink).toBeInTheDocument();
    expect(gitHubLink).toHaveAttribute("href","https://github.com/serede254")
  })

  test("displays link to your linkedIn page",()=>{
    render(<App/>)

    const linkedIn=screen.getByRole("link",{
        name:/linkedIn/i,
        exact:false
    })
    expect(linkedIn).toBeInTheDocument();
    expect(linkedIn).toHaveAttribute("href","https://www.linkedin.com/in/muleri-bruce-bbb125286/")
  })

