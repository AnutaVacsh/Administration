--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.0

-- Started on 2024-01-14 14:54:00

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = on;

SET SESSION AUTHORIZATION 'postgres';

\connect "Photo_Studio"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = on;

SET SESSION AUTHORIZATION 'pg_database_owner';

--
-- TOC entry 4868 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA "public"; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA "public" IS 'standard public schema';


SET SESSION AUTHORIZATION 'postgres';

SET default_tablespace = '';

SET default_table_access_method = "heap";

--
-- TOC entry 216 (class 1259 OID 17207)
-- Name: admin; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "public"."admin" (
    "id" integer NOT NULL,
    "login" character varying(255),
    "password" character varying(255)
);


--
-- TOC entry 215 (class 1259 OID 17206)
-- Name: admin_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "public"."admin_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4869 (class 0 OID 0)
-- Dependencies: 215
-- Name: admin_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "public"."admin_id_seq" OWNED BY "public"."admin"."id";


--
-- TOC entry 220 (class 1259 OID 17224)
-- Name: back_color; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "public"."back_color" (
    "id" integer NOT NULL,
    "id_back" integer NOT NULL,
    "color" character varying(255) NOT NULL,
    "status" character varying(255) DEFAULT 'есть'::character varying NOT NULL
);


--
-- TOC entry 219 (class 1259 OID 17223)
-- Name: back_color_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "public"."back_color_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4870 (class 0 OID 0)
-- Dependencies: 219
-- Name: back_color_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "public"."back_color_id_seq" OWNED BY "public"."back_color"."id";


--
-- TOC entry 218 (class 1259 OID 17214)
-- Name: background; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "public"."background" (
    "id" integer NOT NULL,
    "title" character varying(255) NOT NULL,
    "description" character varying(255),
    "price" integer,
    "img" character varying(255),
    "status" character varying(255) DEFAULT 'есть'::character varying
);


--
-- TOC entry 217 (class 1259 OID 17213)
-- Name: background_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "public"."background_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4871 (class 0 OID 0)
-- Dependencies: 217
-- Name: background_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "public"."background_id_seq" OWNED BY "public"."background"."id";


--
-- TOC entry 228 (class 1259 OID 17271)
-- Name: booking; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "public"."booking" (
    "id" integer NOT NULL,
    "year" integer,
    "month" integer,
    "day" integer,
    "time" integer NOT NULL,
    "id_hall" integer NOT NULL,
    "id_back" integer,
    "id_user" integer NOT NULL,
    "state" character varying(255) NOT NULL,
    "price" integer
);


--
-- TOC entry 227 (class 1259 OID 17270)
-- Name: booking_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "public"."booking_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4872 (class 0 OID 0)
-- Dependencies: 227
-- Name: booking_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "public"."booking_id_seq" OWNED BY "public"."booking"."id";


--
-- TOC entry 230 (class 1259 OID 17293)
-- Name: booking_light; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "public"."booking_light" (
    "id" integer NOT NULL,
    "id_booking" integer NOT NULL,
    "id_light" integer NOT NULL
);


--
-- TOC entry 229 (class 1259 OID 17292)
-- Name: booking_light_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "public"."booking_light_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4873 (class 0 OID 0)
-- Dependencies: 229
-- Name: booking_light_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "public"."booking_light_id_seq" OWNED BY "public"."booking_light"."id";


--
-- TOC entry 226 (class 1259 OID 17254)
-- Name: hall; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "public"."hall" (
    "id" integer NOT NULL,
    "number_hall" character varying(255) NOT NULL,
    "title" character varying(255),
    "description" character varying(255),
    "price_days" integer NOT NULL,
    "price_end" integer NOT NULL,
    "img" character varying(255),
    "status" character varying(255) DEFAULT 'есть'::character varying
);


--
-- TOC entry 225 (class 1259 OID 17253)
-- Name: hall_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "public"."hall_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4874 (class 0 OID 0)
-- Dependencies: 225
-- Name: hall_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "public"."hall_id_seq" OWNED BY "public"."hall"."id";


--
-- TOC entry 224 (class 1259 OID 17244)
-- Name: light; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "public"."light" (
    "id" integer NOT NULL,
    "title" character varying(255) NOT NULL,
    "description" character varying(255),
    "price" integer NOT NULL,
    "img" character varying(255),
    "status" character varying(255) DEFAULT 'есть'::character varying
);


--
-- TOC entry 223 (class 1259 OID 17243)
-- Name: light_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "public"."light_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4875 (class 0 OID 0)
-- Dependencies: 223
-- Name: light_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "public"."light_id_seq" OWNED BY "public"."light"."id";


--
-- TOC entry 222 (class 1259 OID 17237)
-- Name: my_user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "public"."my_user" (
    "id" integer NOT NULL,
    "login" character varying(255) NOT NULL,
    "password" character varying(255),
    "email" character varying(255) NOT NULL
);


--
-- TOC entry 221 (class 1259 OID 17236)
-- Name: my_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "public"."my_user_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4876 (class 0 OID 0)
-- Dependencies: 221
-- Name: my_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "public"."my_user_id_seq" OWNED BY "public"."my_user"."id";


--
-- TOC entry 4669 (class 2604 OID 17210)
-- Name: admin id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "public"."admin" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."admin_id_seq"'::"regclass");


--
-- TOC entry 4672 (class 2604 OID 17227)
-- Name: back_color id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "public"."back_color" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."back_color_id_seq"'::"regclass");


--
-- TOC entry 4670 (class 2604 OID 17217)
-- Name: background id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "public"."background" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."background_id_seq"'::"regclass");


--
-- TOC entry 4679 (class 2604 OID 17274)
-- Name: booking id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "public"."booking" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."booking_id_seq"'::"regclass");


--
-- TOC entry 4680 (class 2604 OID 17296)
-- Name: booking_light id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "public"."booking_light" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."booking_light_id_seq"'::"regclass");


--
-- TOC entry 4677 (class 2604 OID 17257)
-- Name: hall id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "public"."hall" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."hall_id_seq"'::"regclass");


--
-- TOC entry 4675 (class 2604 OID 17247)
-- Name: light id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "public"."light" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."light_id_seq"'::"regclass");


--
-- TOC entry 4674 (class 2604 OID 17240)
-- Name: my_user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "public"."my_user" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."my_user_id_seq"'::"regclass");


--
-- TOC entry 4847 (class 0 OID 17207)
-- Dependencies: 216
-- Data for Name: admin; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."admin" ("id", "login", "password") VALUES (1, 'Ann', 'qwerty') ON CONFLICT DO NOTHING;


--
-- TOC entry 4851 (class 0 OID 17224)
-- Dependencies: 220
-- Data for Name: back_color; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."back_color" ("id", "id_back", "color", "status") VALUES (7, 1, 'чёрный', 'есть') ON CONFLICT DO NOTHING;
INSERT INTO "public"."back_color" ("id", "id_back", "color", "status") VALUES (8, 1, 'красный', 'есть') ON CONFLICT DO NOTHING;
INSERT INTO "public"."back_color" ("id", "id_back", "color", "status") VALUES (9, 2, 'чёрный', 'есть') ON CONFLICT DO NOTHING;
INSERT INTO "public"."back_color" ("id", "id_back", "color", "status") VALUES (10, 2, 'розовый', 'есть') ON CONFLICT DO NOTHING;
INSERT INTO "public"."back_color" ("id", "id_back", "color", "status") VALUES (11, 3, 'белый', 'есть') ON CONFLICT DO NOTHING;
INSERT INTO "public"."back_color" ("id", "id_back", "color", "status") VALUES (12, 3, 'серый', 'есть') ON CONFLICT DO NOTHING;


--
-- TOC entry 4849 (class 0 OID 17214)
-- Dependencies: 218
-- Data for Name: background; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."background" ("id", "title", "description", "price", "img", "status") VALUES (1, 'Бумажные фоны', 'Широкий выбор цветных бумажных фонов для рекламных и персональный фотосессий. ', 0, 'backgroundPaper.png', 'есть') ON CONFLICT DO NOTHING;
INSERT INTO "public"."background" ("id", "title", "description", "price", "img", "status") VALUES (2, 'Тканевые фоны', 'Тканевые фоны для художественных фотосессий', 0, 'backgroundCloth.png', 'есть') ON CONFLICT DO NOTHING;
INSERT INTO "public"."background" ("id", "title", "description", "price", "img", "status") VALUES (3, 'Латексные фоны', 'Латексные фоны для самых креативных фотосессий', 150, 'backgroundLatex.png', 'есть') ON CONFLICT DO NOTHING;


--
-- TOC entry 4859 (class 0 OID 17271)
-- Dependencies: 228
-- Data for Name: booking; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 4861 (class 0 OID 17293)
-- Dependencies: 230
-- Data for Name: booking_light; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 4857 (class 0 OID 17254)
-- Dependencies: 226
-- Data for Name: hall; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."hall" ("id", "number_hall", "title", "description", "price_days", "price_end", "img", "status") VALUES (1, 'Зал «С70»', 'Зал с циклорамой', 'Возможна установка бумажных и тканевых фонов
На окнах шторы блэкаут', 1200, 1500, 'hallC70.png', 'есть') ON CONFLICT DO NOTHING;
INSERT INTO "public"."hall" ("id", "number_hall", "title", "description", "price_days", "price_end", "img", "status") VALUES (2, 'Зал «С170»', 'Зал с угловой циклорамой', 'Возможна установка бумажных и тканевых фонов
На окнах шторы блэкаут', 1700, 2000, 'hallC170.png', 'есть') ON CONFLICT DO NOTHING;
INSERT INTO "public"."hall" ("id", "number_hall", "title", "description", "price_days", "price_end", "img", "status") VALUES (3, 'Зал «С150»', 'Зал с шреками', 'Подходит для любого рода фотосессийИдеально для съемок рекламного контента и каталогов, модельных тестов, а так же для съемок видео, клипов, блогов.', 1700, 2000, 'hallC150.png', 'есть') ON CONFLICT DO NOTHING;
INSERT INTO "public"."hall" ("id", "number_hall", "title", "description", "price_days", "price_end", "img", "status") VALUES (4, 'Зал «С100»', NULL, 'Возможна установка бумажных и тканевых фонов
На окнах шторы блэкаут', 1500, 1800, 'hallC100.png', 'есть') ON CONFLICT DO NOTHING;
INSERT INTO "public"."hall" ("id", "number_hall", "title", "description", "price_days", "price_end", "img", "status") VALUES (5, 'Зал «С80»', NULL, 'Зал для тематических фотосессий', 1700, 2000, 'hallC80.png', 'есть') ON CONFLICT DO NOTHING;


--
-- TOC entry 4855 (class 0 OID 17244)
-- Dependencies: 224
-- Data for Name: light; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."light" ("id", "title", "description", "price", "img", "status") VALUES (1, 'Godox VL300', 'Светодиодный осветитель мощностью 300Вт с цветовой температурой 5600К. Совместим со всеми светоформирующими насадками.
', 200, 'lightVL300.png', 'есть') ON CONFLICT DO NOTHING;
INSERT INTO "public"."light" ("id", "title", "description", "price", "img", "status") VALUES (4, 'Генератор дыма', 'Дым-машина Involight FM1200 обеспечивает быстрое задымление помещений небольшого размера. Устройство комплектуется радиопультом дистанционного управления', 300, 'lightFM1200.png', 'есть') ON CONFLICT DO NOTHING;
INSERT INTO "public"."light" ("id", "title", "description", "price", "img", "status") VALUES (5, 'Лазер', 'Рекомендуем использовать в комплекте с дым машиной в зале 

Лазер необходимо бронировать заранее. ', 300, 'lightLazer.png', 'есть') ON CONFLICT DO NOTHING;
INSERT INTO "public"."light" ("id", "title", "description", "price", "img", "status") VALUES (3, 'Godox TL120 RGB', 'Аккумуляторный мультицветный (RGB) светодиодный светильник в форме трубки длиной 117см.', 150, 'lightTL120.png', 'есть') ON CONFLICT DO NOTHING;
INSERT INTO "public"."light" ("id", "title", "description", "price", "img", "status") VALUES (2, 'Godox AD600 Pro', 'Универсальная аккумуляторная вспышка AD600Pro мощностmю 600Дж.', 1500, 'lightVL300.png', 'есть') ON CONFLICT DO NOTHING;


--
-- TOC entry 4853 (class 0 OID 17237)
-- Dependencies: 222
-- Data for Name: my_user; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 4877 (class 0 OID 0)
-- Dependencies: 215
-- Name: admin_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."admin_id_seq"', 1, true);


--
-- TOC entry 4878 (class 0 OID 0)
-- Dependencies: 219
-- Name: back_color_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."back_color_id_seq"', 12, true);


--
-- TOC entry 4879 (class 0 OID 0)
-- Dependencies: 217
-- Name: background_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."background_id_seq"', 3, true);


--
-- TOC entry 4880 (class 0 OID 0)
-- Dependencies: 227
-- Name: booking_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."booking_id_seq"', 1, false);


--
-- TOC entry 4881 (class 0 OID 0)
-- Dependencies: 229
-- Name: booking_light_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."booking_light_id_seq"', 1, false);


--
-- TOC entry 4882 (class 0 OID 0)
-- Dependencies: 225
-- Name: hall_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."hall_id_seq"', 5, true);


--
-- TOC entry 4883 (class 0 OID 0)
-- Dependencies: 223
-- Name: light_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."light_id_seq"', 5, true);


--
-- TOC entry 4884 (class 0 OID 0)
-- Dependencies: 221
-- Name: my_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."my_user_id_seq"', 1, false);


--
-- TOC entry 4682 (class 2606 OID 17212)
-- Name: admin admin_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "public"."admin"
    ADD CONSTRAINT "admin_pkey" PRIMARY KEY ("id");


--
-- TOC entry 4686 (class 2606 OID 17230)
-- Name: back_color back_color_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "public"."back_color"
    ADD CONSTRAINT "back_color_pkey" PRIMARY KEY ("id");


--
-- TOC entry 4684 (class 2606 OID 17222)
-- Name: background background_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "public"."background"
    ADD CONSTRAINT "background_pkey" PRIMARY KEY ("id");


--
-- TOC entry 4696 (class 2606 OID 17298)
-- Name: booking_light booking_light_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "public"."booking_light"
    ADD CONSTRAINT "booking_light_pkey" PRIMARY KEY ("id");


--
-- TOC entry 4694 (class 2606 OID 17276)
-- Name: booking booking_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "public"."booking"
    ADD CONSTRAINT "booking_pkey" PRIMARY KEY ("id");


--
-- TOC entry 4692 (class 2606 OID 17262)
-- Name: hall hall_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "public"."hall"
    ADD CONSTRAINT "hall_pkey" PRIMARY KEY ("id");


--
-- TOC entry 4690 (class 2606 OID 17252)
-- Name: light light_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "public"."light"
    ADD CONSTRAINT "light_pkey" PRIMARY KEY ("id");


--
-- TOC entry 4688 (class 2606 OID 17242)
-- Name: my_user my_user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "public"."my_user"
    ADD CONSTRAINT "my_user_pkey" PRIMARY KEY ("id");


--
-- TOC entry 4697 (class 2606 OID 17231)
-- Name: back_color back_color_id_back_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "public"."back_color"
    ADD CONSTRAINT "back_color_id_back_fkey" FOREIGN KEY ("id_back") REFERENCES "public"."background"("id");


--
-- TOC entry 4698 (class 2606 OID 17282)
-- Name: booking booking_id_back_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "public"."booking"
    ADD CONSTRAINT "booking_id_back_fkey" FOREIGN KEY ("id_back") REFERENCES "public"."back_color"("id");


--
-- TOC entry 4699 (class 2606 OID 17277)
-- Name: booking booking_id_hall_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "public"."booking"
    ADD CONSTRAINT "booking_id_hall_fkey" FOREIGN KEY ("id_hall") REFERENCES "public"."hall"("id");


--
-- TOC entry 4700 (class 2606 OID 17287)
-- Name: booking booking_id_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "public"."booking"
    ADD CONSTRAINT "booking_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "public"."my_user"("id");


--
-- TOC entry 4701 (class 2606 OID 17299)
-- Name: booking_light booking_light_id_booking_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "public"."booking_light"
    ADD CONSTRAINT "booking_light_id_booking_fkey" FOREIGN KEY ("id_booking") REFERENCES "public"."booking"("id");


--
-- TOC entry 4702 (class 2606 OID 17304)
-- Name: booking_light booking_light_id_light_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "public"."booking_light"
    ADD CONSTRAINT "booking_light_id_light_fkey" FOREIGN KEY ("id_light") REFERENCES "public"."light"("id");


-- Completed on 2024-01-14 14:54:00

--
-- PostgreSQL database dump complete
--

