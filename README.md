Dataset used : https://www.kaggle.com/datasets/ananthu017/emotion-detection-fer
# Sung-geet
 music recommendation system based on human emotions.
The proposed music recommendation system employs a combination of machine learning, deep learning, and computer vision techniques to detect the user's facial expressions and suggest music based on their emotional state. Specifically, the system uses a Convolutional Neural Network (CNN) model to detect facial emotions from the user's facial expressions.
To build the CNN model, the system utilizes the fer2013 updated dataset, which comprises grayscale images of faces and is labeled with seven emotion categories. Once the emotion has been classified, the system recommends songs that match the user's current emotional state.
The system is designed as a web application, with the main interface built using the Flask framework. The user's image is captured and sent to the model for emotion detection. Once the user's emotion is detected, recommended music is displayed on the web page. The proposed system has the potential to provide a more personalized and engaging listening experience for users, while also benefiting music creators and providers.

Our project is trained on an MTCNN (Multi-Task Cascaded Convolutional Networks) model using the FER (Facial Emotion Recognition) updated dataset, with a goal to classify facial expressions into distinct emotion categories, including sadness, happiness, neutrality, surprise, fear, and anger. In this project, we address the crucial task of robust emotion recognition from facial images, catering to real-world applications where nuanced and complex emotions are prevalent. We have leveraged deep learning techniques to capture subtle features in facial expressions and successfully classify them into multiple emotional states. The project encompasses data preprocessing, model training, validation, and testing phases, and it underscores the challenges of handling diverse expressions, variations in lighting, and demographic factors. The accuracy and reliability of our MTCNN-based emotion recognition model position it as a valuable tool for applications spanning human-computer interaction, sentiment analysis, and personalized content recommendation. 

** Challenges**
Face detection:
When we employed the Haar cascade model for real-time face detection, we encountered a challenge that it didn't just recognize faces but also mistook edges and corners of various objects in the frame as faces. This led to what we call "false positives," where it identified things that weren't faces as faces. It's like if you were searching for your keys but your flashlight was so sensitive that it started highlighting random objects on your desk, making it harder to find what you were looking for. This limited the accuracy and reliability of face detection using the Haar cascade model in real-time scenarios, as it couldn't consistently differentiate between actual faces and other shapes.

The limitations we faced of the Haar cascade as an object detection algorithm become apparent when utilized for facial emotion analysis. It tends to detect not only faces but also edges and corners of objects in the background, which has a notable impact on accuracy, often hovering around 48% to 50%. Furthermore, the algorithm is sensitive to variations in lighting conditions, struggling in both low-light and complex lighting environments, leading to inaccurate detection of facial emotions. 


The system, when utilizing Haar Cascade, encountered the issue of detecting multiple frames and also identifying various objects within the frames.

Using MTCNN the issue was resolved and the system is now detecting faces correctly.

Accuracy:
During the model development process, we encountered a significant challenge when using the FER2013 dataset initially. It was found that the model's performance was not up to the desired standard, as it only achieved an accuracy of 47%. This lower accuracy indicated that the model's ability to correctly predict emotions from facial expressions was inadequate.

To address this issue, we decided to utilize an updated version of the FER2013 dataset. This updated dataset resulted in a notable improvement in accuracy, with the model achieving a higher accuracy rate of 60.7%.

The improvement was primarily attributed to the adjustment of training parameters, specifically by increasing the number of training epochs and the steps per epoch. By extending the training time through more epochs, the model had the opportunity to learn more complex patterns and relationships within the data, ultimately leading to a better performance. This highlights the significance of adequate training and the positive impact it can have on model accuracy and effectiveness in tasks like emotion recognition from facial expressions.

