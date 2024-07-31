import React from 'react'
import './App.css'
import { Document, Packer, Paragraph, TextRun, AlignmentType } from 'docx'
import { saveAs } from 'file-saver'

function App() {
  const email = "xyz@gmail.com"
  const phone = "1234567890"
  const name = "John Doe"
  const location = "New York, NY"
  const text = ["Driven by a passion for crafting user-centric, high-performing web applications, I am writing to express my keen interest in joining Microsoft's team of talented developers. My experience as a full-stack developer, specializing in the MERN stack and Next.js, aligns perfectly with your commitment to innovation and creating positive impact through technology.","My portfolio showcases my ability to bring impactful solutions to life, as seen in projects like TeamUp, SnapNotes, and a Weather App, all built using Next.js and MongoDB. I am adept at utilizing technologies like MongoDB, Clerk, Kafka, Tailwind CSS, Prisma ORM, Docker, and GitHub to build robust and scalable applications.","Beyond technical proficiency, I possess a strong leadership background. As Backend Lead for Google DSC, I led the organization of events and workshops focusing on backend development, fostering a collaborative environment and promoting knowledge sharing. This experience has honed my communication, leadership, and public speaking skills, making me a valuable asset to any team. I am particularly drawn to Microsoft's commitment to empowering individuals and organizations through technology, a mission that deeply resonates with my own values.","Your culture of curiosity and inclusivity aligns perfectly with my desire to learn, grow, and contribute to a diverse and vibrant environment. I am confident that my skills, passion, and dedication will contribute significantly to Microsoft's ongoing success. I am eager to learn more about this opportunity and how I can leverage my expertise to create impactful solutions that shape a brighter future."]
  
    const generateDocx = async ( email, phone, name, location, text ) => {
      const doc = new Document({
        sections: [
            {
                properties: {},
                children: [
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: `${phone}`,
                                bold: true,
                                size: 24,
                            }),
                        ],
                        alignment: AlignmentType.RIGHT,
                        spacing: {
                            after: 100,
                        },
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: `${email}`,
                                bold: true,
                                size: 24,
                            }),
                        ],
                        alignment: AlignmentType.RIGHT,
                        spacing: {
                            after: 100,
                        },
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: `${location}`,
                                bold: true,
                                size: 24,
                            }),
                        ],
                        alignment: AlignmentType.RIGHT,
                        spacing: {
                            after: 0,
                        },
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: `${name}`,
                                bold: true,
                                size: 40,
                            }),
                        ],
                        alignment: AlignmentType.LEFT,
                        spacing: {
                            after: 200,
                        },
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "Dear Hiring Manager Team,",
                                size: 24,
                            }),
                        ],
                        spacing: {
                            after: 100,
                        },
                    }),
                    ...text.map((paragraphText) => (
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: paragraphText,
                            size: 24,
                          }),
                        ],
                        alignment: AlignmentType.JUSTIFIED,
                        spacing: {
                          after: 200,
                        },
                      })
                    )),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: `Sincerely,`,
                                size: 24,
                            }),
                        ],
                        spacing: {
                          after: 100,
                        },
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: `${name}`,
                                size: 28,
                            }),
                        ],
                    }),
                ],
            },
        ],
      });
  
      const buffer = await Packer.toBlob(doc);
      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });
  
      saveAs(blob, "custom_cover_letter.docx");
    }

    const handleDocx = () => {
      generateDocx(email, phone, name, location, text)
    }
  return (
    <>
    <button onClick={handleDocx}>Download DOCX</button>
    </>
  )
}

export default App
