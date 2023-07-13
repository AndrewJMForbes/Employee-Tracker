INSERT INTO department(name)
VALUES
('Engineering'),
('Marketing'),
('Legal'),
('Sales');

INSERT INTO (title, salary, department_id)
VALUES
('Sales Lead',180000,1),
('Salesperson',120000,1),
('Lead Engineer',180000,1),
('Software Engineer',70000,1),
('Account Manager',180000,2),
('Accountant',100000,2),
('Legal Team Lead',300000,3),
('Lawyer',200000,3);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
('Andrew','Forbes',1,null),
('Andrew','Hur',2,1),
('Danny','Wittig',4,null),
('Hannah','Wolfson',5,3),
('Teylor','Smith',6,null),
('Christopher','Clair',7,5),
('Rich','Hosek',8,null),
('MJ','Shelton',9,7);