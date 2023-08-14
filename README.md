# Quiero_regresar_a_casa

## Description:

Quiero Regresar is an organization dedicated to helping find missing persons, with a special focus on abduction cases. We will start our operations in Mexico and later expand our work to other countries.

Our project consists of two main components. Firstly, we focus on educating the community about disappearances. We aim to raise awareness in society about the dangers and effective actions to take in the event of a loved one's disappearance. We will organize trainings, workshops, and informative campaigns to improve people's knowledge and skills in this area.

Secondly, we are working on developing a system that will allow families of missing persons to create their own "search campaign." This system will gather information about the missing individuals, providing descriptions, photographs, and other relevant data. This will enable families to involve the community more effectively in the search for their loved ones.

As part of our project, we also plan to create a mobile application that will enable people to participate in the search for missing persons. The application will include tools for reporting information, viewing current cases, sharing leads, and coordinating search efforts. This way, anyone with the application can actively contribute to our efforts in finding missing persons.

An important aspect of our project is the inclusion of individuals who wish to help in the search for missing persons. We will connect families, altruistic donors, and people in need of financial assistance in Mexico. The latter will be able to actively participate in search operations through our application and potentially receive rewards for their help in locating missing persons.

The goal of Quiero Regresar is to effectively find missing persons, provide support to families in difficult situations, and encourage community involvement in search actions. Our project aims to achieve positive results and contribute to improving safety and collaboration among people.

![image](https://github.com/Murtrag/Quiero_regresar_a_casa/assets/19934843/9b3b9d41-d50d-49c1-aac1-f36fe019e085)


## Technology Stack:
### BackEnd
1. Python 3.11
2. Django 4.1.2 (https://docs.djangoproject.com/en/4.1/)
   - Django rest framework (https://www.django-rest-framework.org/)
   - Django-phonenumber (https://django-phonenumber-field.readthedocs.io/en/latest/)

### FrontEnd
1. React.js
2. Sass (https://sass-lang.com/documentation/)
3. react-sweetalert2

## Run instruction
To run the backend:
```
docker-compose -f backend/docker-compose.yaml up
```


## Notes
*/30 * * * * su -s /bin/sh nobody -c 'cd ~dstrt/www && /usr/local/bin/git pull -q origin master' 

