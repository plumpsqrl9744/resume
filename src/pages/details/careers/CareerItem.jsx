import React from "react";
import Text from "../../../component/atom/Text";
import { CompanyWithPosition, IntroProject, CompanyIntro } from "./styles";

export default function CareerItem({ company, position, period, projects }) {
  return (
    <>
      <CompanyWithPosition>
        <CompanyIntro>
          <Text size="3xl" bold={true}>
            {company}
          </Text>
          <Text size="3xl">/ {position}</Text>
        </CompanyIntro>

        <div>
          <Text size="xl">{period}</Text>
        </div>
      </CompanyWithPosition>

      {projects.map((project, projectIndex) => (
        <IntroProject key={projectIndex}>
          <Text size="3xl" bold={true} href={project.projectLink || ""}>
            {project.title} {project.subtitle && `${project.subtitle}`}
            {project.projectLink && <i className="bi bi-link-45deg"></i>}
          </Text>

          <div className="project-description">
            {project.description.map((desc, index) => (
              <div key={index}>
                {desc.title && (
                  <Text
                    size={desc.titleSize || "xl"}
                    bold={true}
                    className="description-title"
                  >
                    {desc.title}
                  </Text>
                )}
                {desc.content && (
                  <Text
                    size={desc.contentSize || "lg"}
                    className="description-content"
                  >
                    {desc.content}
                  </Text>
                )}
              </div>
            ))}
          </div>

          <div className="achievements-section">
            <Text
              size="2xl"
              bold={true}
              className="section-title"
              margin={"30px"}
            >
              Achievements
            </Text>

            {project.achievements.map((achievement, index) => (
              <div key={index} className="achievement-item">
                {achievement.title && (
                  <Text size="xl" className="achievement-title">
                    {achievement.title}
                  </Text>
                )}
                {achievement.items && (
                  <ul>
                    {achievement.items.map((item, idx) => (
                      <li key={idx}>
                        <Text
                          size="lg"
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="stack-section">
            <Text size="2xl" bold={true} className="section-title">
              Stack
            </Text>
            <ul>
              {project.stacks.map((stack, index) => (
                <li key={index}>
                  <Text size="xl">
                    <strong>{stack.category}:</strong> {stack.items}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        </IntroProject>
      ))}
    </>
  );
}
