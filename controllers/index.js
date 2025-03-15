exports.getProfessionalData = (req, res) => {
    res.json({
        professionalName: "Francisco Mata",
        base64Image: "<your-base64-encoded-image>",
        nameLink: {
            firstName: "Francisco",
            url: "https://frankmata17.github.io/mywork/"
        },
        primaryDescription: "A passionate software engineer with experience in full-stack development.",
        workDescription1: "Experienced in JavaScript, React, Node.js, and databases.",
        workDescription2: "Loves building scalable applications and solving complex problems.",
        linkTitleText: "Connect with me on:",
        linkedInLink: {
            text: "LinkedIn",
            link: "https://www.linkedin.com/in/johndoe"
        },
        githubLink: {
            text: "GitHub",
            link: "https://github.com/johndoe"
        }
    });
};
