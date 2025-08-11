import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-8", "CaloFruit", "img/projects/CaloFruit-Thumbnail.jpeg", `
    <div class="paragraph">
      <strong>CaloFruit</strong> is an application designed to detect food images and provide calorie information. This application is a helpful tool for individuals who want to manage their daily calorie intake. The scope is narrowed to fruits as the dataset, with the application detecting fruits from an image and providing the corresponding calorie information. This app developed as Bangkit Capstone Project.
          </div>
            <div class="paragraph center">
              <img class="pc-screenshot" src="img/projects/CaloFruit-Thumbnail.jpeg" alt="CaloFruit" />
          </div>

          <div class="paragraph">
            Main features :
            <ul>
            <li>10 Fruit Classes: The app is capable of identifying and classifying 10 distinct types of fruits/li>
            <li>78% Prediction Accuracy: Its predictive model has been validated to achieve an accuracy of up to 78%.</li>
            <li>VGG16 Model: The application leverages the powerful VGG16 pre-trained model for image recognition.</li>
            </ul>
        </div>

          <div class="paragraph">
              <div class="notice">
                Source code available on <a href="https://github.com/MekelWibi/Bangkit-Capstone-2023/tree/main" target="_blank">GitHub</a>.
              </div>
          </div>

        <div class="paragraph center">
          <img class="pc-screenshot" src="img/projects/CaloFruit1.jpeg" alt="CaloFruit1" />
          <img class="pc-screenshot" src="img/projects/CaloFruit2.jpeg" alt="CaloFruit2" />
          <img class="pc-screenshot" src="img/projects/CaloFruit3.jpeg" alt="CaloFruit3" /> 
          <img class="pc-screenshot" src="img/projects/CaloFruit4.jpeg" alt="CaloFruit4" />
          <img class="pc-screenshot" src="img/projects/CaloFruit5.jpeg" alt="CaloFruit5" />  
        </div>
    `, "",true,false)
    
];