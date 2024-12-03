// listing elements
document.getElementById('resumeForm')?.addEventListener('submit' , function(event){
    event.preventDefault();


       // Get references to form elements using their ID's
   const profilePictureInput = document.getElementById(
    "profilePicture"
) as HTMLInputElement;

    // type assertion
    const nameElement= document.getElementById("name") as HTMLInputElement;
    const emailElement= document.getElementById("email") as HTMLInputElement;
    const phoneElement= document.getElementById("phone") as HTMLInputElement;
    const educationElement= document.getElementById(
        "education"
    ) as HTMLInputElement;
    const experienceElement= document.getElementById(
        "experience"
    ) as HTMLInputElement;
    const skillsElement= document.getElementById(
        "skills"
    ) as HTMLInputElement;

// **
const usernameElement = document.getElementById(
    "username"
) as HTMLInputElement;

    
    if (
        profilePictureInput &&
         nameElement && 
         emailElement && 
         phoneElement && 
         educationElement && 
         experienceElement && 
         skillsElement 
 
       ){

        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

    // // **
    // const username = usernameElement.value;
    // const uniquePath = `resumes${username.replace(/\s+/g, '_')}_cv.html`


          // Picture Elements
     const profilePictureFile = profilePictureInput.files?.[0] 
     const profilePictureURL = profilePictureFile
      ? URL.createObjectURL(profilePictureFile)
      : "";
    
    
     // Create Resume HTML Content
    const resumeHTML= `
    <h2>Resume</h2>
    ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
    <p><strong>Name:</strong> ${name} </span> </p>
    <p><strong>Email:</strong> ${email} </span> </p>
    <p><strong>Phone Number:</strong> ${phone} </span> </p>
    
    <h3>Education</h3>
    <p> ${education}</p>

    <h3>Experience</h3>
    <p> ${experience}</p>

    <h3>Skills</h3>
    <p> ${skills}</p>
    `;


// // **
// const downloadLink = document.createElement('a')
// downloadLink.href ='data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
// downloadLink.download = uniquePath;
// downloadLink.textContent = 'Download Your Resume';


// ***************************************************************************
// Display the resume in output Container
 const resumeOutputElement = document.getElementById('resumeOutput')
    if (resumeOutputElement){
        resumeOutputElement.innerHTML = resumeHTML;
        resumeOutputElement.classList.remove("hidden");

        // Create Container for Buttons
        const buttonsContainer = document.createElement("div");
        buttonsContainer.id = "buttonsContainer";
        resumeOutputElement.appendChild(buttonsContainer);

        // Add Download PDF Buttons
        const downloadButton = document.createElement("button");
        downloadButton.textContent = "Download as PDF";
        downloadButton.addEventListener("click", () => {
            window.print(); // Open the print dialogue, allowing the user to save as PDF.
        });
        buttonsContainer.appendChild(downloadButton);

        // Add Shareable Link Button
        const shareLinkButton = document.createElement("button");
        shareLinkButton.textContent = "Copy Shareable Link";
        shareLinkButton.addEventListener("click", async () => {
            try{
                // Create a unique Shareable Link (stimulate it in this case)
                const shareableLink = `https://yourdomain.com/resumes/${name.replace(
                    /\s+/g,
                    "_"
                )}_cv.html`;

                // Use Clipboard API to copt the shareable link
                await navigator.clipboard.writeText(shareableLink);
                alert("Shareable Link Copied to Clipboard!");
               } catch (err) {
                console.error("Failed to copy link: ", err);
                alert("Failed to copy link to clipboard. Please try again.");
               }
        });
        buttonsContainer.appendChild(shareLinkButton);
    } else {
        console.error("Resume output container not found");
    }
   } else {
       console.error("Forms elements are missing");
   }
});

