import React from "react";
import { useHistory } from "react-router-dom";

//material ui
import { Container, Grid, Typography } from "@material-ui/core";

import Button from "../../components/utils/Button";
import Accordion from '../../components/utils/Accordion'

const points = [
    "Customizable, HR-approved, ready-to-use resume templates",
    "Step-by-step guidance and expert tips to create a targeted, job-scoring resume",
    "Free industry-specific, pre-written examples you can add with the click of a button",
];

const titles = [
    'Is Resume Build the best resume builder?',
    'Can I build my resume for free using this resume builder?',
    'What’s the best resume template to use?',
    'What should I include on my resume?',
    'How long should my resume be?',
    'How should I format my resume?'
]

const descriptions = [
    `Are you after a resume builder that is: a) proven to help score jobs at the world’s best companies, b) quick, easy, and affordable to use, and c) equipped with HR-approved resume templates and pre-written job description bullet points?

    If you answered “Yes,” then you’ll understand why thousands of job seekers believe that Resume Build is the best resume builder on the market. 
    
    Our online resume maker is designed to help job seekers just like you to create a professional resume in mere minutes. 
    
    Considering that many other options—particularly free resume builders— are incredibly clunky and difficult to use, this is no easy feat. Worse still, many of our competitors’ offerings simply spit out generic resumes that aren’t formatted or written to be HR-friendly.
    
    These are a few of the many reasons why so many people have turned to Resume Build to help them transform their job prospects.`,
    `Are you wondering “Can I really build my resume for free with Resume Build’s resume software?” or “Is this a free resume builder?” The answer is that it’s free to try. Once you sign up, you’ll also gain access to plenty of free resume templates, free resume job description bullet points, and free resume tips to help you create an unforgettable resume.`,
    `The truth of the matter is that there isn’t just one template to suit everyone. That’s why we provide a wide variety of professionally made resume templates to ensure that there’s something to suit each person’s unique situation, goals, and aesthetic preferences.

    When browsing resume templates in our resume template library, it’s always helpful to keep in mind the message you want to send to hiring managers about yourself.
    
    If you’re still stuck, here’s a quick guide that will help you make the right choice:
    
    Do you want to appear creative and cutting-edge? Opt for the Cool or Awesome template. 
    Do you want hiring managers to focus on your professionalism? The Professional or Contemporary template will do the trick. 
    Do you want to play it safe with a more standard template? Try the Simple or Modern resume template`,
    `There are a number of key pieces of information that you need to include in your resume. The following six resume sections cover the most pertinent information hiring managers are looking for:

    Contact information: Your name, address, phone number, and email address.
    A Resume Summary or Resume Objective: A section that succinctly conveys why you’re a standout candidate for the given position. 
    Employment history: An overview of your most relevant professional experiences, with an emphasis on your key achievements. 
    Education: Provide details about your degree or diploma.
    Training and certifications: Note any training courses and certifications that are relevant to the job here.
    Skills: List both hard (technical) skills and soft (interpersonal) skills you offer. 
    But before you get writing, keep in mind that you will need to tailor your resume to the given role you are applying for. 
    
    A simple rule of thumb is to stop thinking, “I can build my resume in a way that lets me apply to any position I want,” and start thinking, “I need to build my resume in a way that highlights how suitable I am for the specific position I’m after.”
    
    This simple switch in thinking will help you to address the precise qualities a hiring manager is after. Remember, hiring managers look to your resume to see if you’re an ideal fit for the specific role they’re hiring for. So if your resume is too generic, they’ll simply think, “Next!”
    
    That’s why it’s vital to analyze the advertisement of the role you want for keywords that indicate what the hiring manager is after. Once you identify these keywords, you should integrate any that are relevant to you throughout each of the sections we mentioned above.`,
    `The length of your resume will depend on how long you have been working for. Our experts recommend one page for every 10 years of work. 

    So if you’re a high school or college student, wish to apply for an internship, or have 10 years or fewer of professional experience, a one page resume will be sufficient. However, if you have been working for 10 or more years, you may add a page for every decade you’ve been in the workforce.`,
    `The resume format you choose can influence the way a hiring manager perceives your job application. While there are a handful of different resume formats to choose from, the good news is that there’s one that will suit most professionals: the reverse-chronological resume format. 

    This resume format emphasizes your professional experience, as this is the part of your resume hiring managers are generally most interested in. It formats your work history from most to least recent, so hiring managers can clearly see your career progression. Smart, right?
    
    If you're an applicant who wishes to take the focus off of your limited work experience, it may be wise to opt for the combination resume format. Also referred to as the hybrid format, this resume format is a blend of the aforementioned reverse-chronological resume format and the functional format. The functional format aims to de-emphasize your lack of experience by instead putting your skills front and center.`
]

function Landing() {
    const history = useHistory();

    return (
        <Container>
            <Grid container
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" align="left">
                        <b>
                            Make a Job-Winning Resume in Minutes With Our Simple Resume
                            Builder
                        </b>
                    </Typography>
                    <br />
                    {points.map((point) => {
                        return (
                            <Typography variant="h6" align="left">
                                ✔️ {point}
                            </Typography>
                        );
                    })}
                    <br />
                    <Button
                        label="BUILD MY RESUME"
                        color="warning"
                        size="large"
                        sx={{
                            fontSize: 30,
                            fontWeight: "bold",
                            backgroundColor: "#fe8c26",
                        }}
                        handleClick={() => {
                            history.push("/template");
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src='demo.png' style={{ width: '100%', height: '100%' }} />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" align="left">
                        <b>
                            Expert Answers to Common Resume Builder Questions
                        </b>
                    </Typography>
                    <br/>
                </Grid>
                <Grid item xs={12}>
                    <Accordion titles={titles} descriptions={ descriptions}/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Landing;
