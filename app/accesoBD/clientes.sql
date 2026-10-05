CREATE TABLE IF NOT EXISTS clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dni VARCHAR(20) UNIQUE NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);

INSERT INTO clientes (dni, nombre, email) VALUES 
('12345678', 'Juan Pérez', 'juan@example.com'),
('40100001', 'Pedro Gimenez', 'pedro@example.com'),
('40100002', 'Juana Pérez', 'juana@example.com'),
('40100003', 'Fernanda Benitez', 'fernanda@example.com'),
('87654321', 'María Gómez', 'maria@example.com');