PGDMP  7                     |            Photo_Studio    16.0    16.0 B                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    17093    Photo_Studio    DATABASE     �   CREATE DATABASE "Photo_Studio" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE "Photo_Studio";
                postgres    false            �            1259    17207    admin    TABLE     ~   CREATE TABLE public.admin (
    id integer NOT NULL,
    login character varying(255),
    password character varying(255)
);
    DROP TABLE public.admin;
       public         heap    postgres    false            �            1259    17206    admin_id_seq    SEQUENCE     �   CREATE SEQUENCE public.admin_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.admin_id_seq;
       public          postgres    false    216                       0    0    admin_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.admin_id_seq OWNED BY public.admin.id;
          public          postgres    false    215            �            1259    17224 
   back_color    TABLE     �   CREATE TABLE public.back_color (
    id integer NOT NULL,
    id_back integer NOT NULL,
    color character varying(255) NOT NULL,
    status character varying(255) DEFAULT 'есть'::character varying NOT NULL
);
    DROP TABLE public.back_color;
       public         heap    postgres    false            �            1259    17223    back_color_id_seq    SEQUENCE     �   CREATE SEQUENCE public.back_color_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.back_color_id_seq;
       public          postgres    false    220                       0    0    back_color_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.back_color_id_seq OWNED BY public.back_color.id;
          public          postgres    false    219            �            1259    17214 
   background    TABLE       CREATE TABLE public.background (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description character varying(255),
    price integer,
    img character varying(255),
    status character varying(255) DEFAULT 'есть'::character varying
);
    DROP TABLE public.background;
       public         heap    postgres    false            �            1259    17213    background_id_seq    SEQUENCE     �   CREATE SEQUENCE public.background_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.background_id_seq;
       public          postgres    false    218                       0    0    background_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.background_id_seq OWNED BY public.background.id;
          public          postgres    false    217            �            1259    17271    booking    TABLE       CREATE TABLE public.booking (
    id integer NOT NULL,
    year integer,
    month integer,
    day integer,
    "time" integer NOT NULL,
    id_hall integer NOT NULL,
    id_back integer,
    id_user integer NOT NULL,
    state character varying(255) NOT NULL,
    price integer
);
    DROP TABLE public.booking;
       public         heap    postgres    false            �            1259    17270    booking_id_seq    SEQUENCE     �   CREATE SEQUENCE public.booking_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.booking_id_seq;
       public          postgres    false    228                       0    0    booking_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.booking_id_seq OWNED BY public.booking.id;
          public          postgres    false    227            �            1259    17293    booking_light    TABLE        CREATE TABLE public.booking_light (
    id integer NOT NULL,
    id_booking integer NOT NULL,
    id_light integer NOT NULL
);
 !   DROP TABLE public.booking_light;
       public         heap    postgres    false            �            1259    17292    booking_light_id_seq    SEQUENCE     �   CREATE SEQUENCE public.booking_light_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.booking_light_id_seq;
       public          postgres    false    230                       0    0    booking_light_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.booking_light_id_seq OWNED BY public.booking_light.id;
          public          postgres    false    229            �            1259    17254    hall    TABLE     [  CREATE TABLE public.hall (
    id integer NOT NULL,
    number_hall character varying(255) NOT NULL,
    title character varying(255),
    description character varying(255),
    price_days integer NOT NULL,
    price_end integer NOT NULL,
    img character varying(255),
    status character varying(255) DEFAULT 'есть'::character varying
);
    DROP TABLE public.hall;
       public         heap    postgres    false            �            1259    17253    hall_id_seq    SEQUENCE     �   CREATE SEQUENCE public.hall_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.hall_id_seq;
       public          postgres    false    226            	           0    0    hall_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.hall_id_seq OWNED BY public.hall.id;
          public          postgres    false    225            �            1259    17244    light    TABLE       CREATE TABLE public.light (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description character varying(255),
    price integer NOT NULL,
    img character varying(255),
    status character varying(255) DEFAULT 'есть'::character varying
);
    DROP TABLE public.light;
       public         heap    postgres    false            �            1259    17243    light_id_seq    SEQUENCE     �   CREATE SEQUENCE public.light_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.light_id_seq;
       public          postgres    false    224            
           0    0    light_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.light_id_seq OWNED BY public.light.id;
          public          postgres    false    223            �            1259    17237    my_user    TABLE     �   CREATE TABLE public.my_user (
    id integer NOT NULL,
    login character varying(255) NOT NULL,
    password character varying(255),
    email character varying(255) NOT NULL
);
    DROP TABLE public.my_user;
       public         heap    postgres    false            �            1259    17236    my_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.my_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.my_user_id_seq;
       public          postgres    false    222                       0    0    my_user_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.my_user_id_seq OWNED BY public.my_user.id;
          public          postgres    false    221            =           2604    17210    admin id    DEFAULT     d   ALTER TABLE ONLY public.admin ALTER COLUMN id SET DEFAULT nextval('public.admin_id_seq'::regclass);
 7   ALTER TABLE public.admin ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            @           2604    17227    back_color id    DEFAULT     n   ALTER TABLE ONLY public.back_color ALTER COLUMN id SET DEFAULT nextval('public.back_color_id_seq'::regclass);
 <   ALTER TABLE public.back_color ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    220    220            >           2604    17217    background id    DEFAULT     n   ALTER TABLE ONLY public.background ALTER COLUMN id SET DEFAULT nextval('public.background_id_seq'::regclass);
 <   ALTER TABLE public.background ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218            G           2604    17274 
   booking id    DEFAULT     h   ALTER TABLE ONLY public.booking ALTER COLUMN id SET DEFAULT nextval('public.booking_id_seq'::regclass);
 9   ALTER TABLE public.booking ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    227    228    228            H           2604    17296    booking_light id    DEFAULT     t   ALTER TABLE ONLY public.booking_light ALTER COLUMN id SET DEFAULT nextval('public.booking_light_id_seq'::regclass);
 ?   ALTER TABLE public.booking_light ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    229    230    230            E           2604    17257    hall id    DEFAULT     b   ALTER TABLE ONLY public.hall ALTER COLUMN id SET DEFAULT nextval('public.hall_id_seq'::regclass);
 6   ALTER TABLE public.hall ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    225    226            C           2604    17247    light id    DEFAULT     d   ALTER TABLE ONLY public.light ALTER COLUMN id SET DEFAULT nextval('public.light_id_seq'::regclass);
 7   ALTER TABLE public.light ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    224    224            B           2604    17240 
   my_user id    DEFAULT     h   ALTER TABLE ONLY public.my_user ALTER COLUMN id SET DEFAULT nextval('public.my_user_id_seq'::regclass);
 9   ALTER TABLE public.my_user ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221    222            �          0    17207    admin 
   TABLE DATA           4   COPY public.admin (id, login, password) FROM stdin;
    public          postgres    false    216    J       �          0    17224 
   back_color 
   TABLE DATA           @   COPY public.back_color (id, id_back, color, status) FROM stdin;
    public          postgres    false    220   JJ       �          0    17214 
   background 
   TABLE DATA           P   COPY public.background (id, title, description, price, img, status) FROM stdin;
    public          postgres    false    218   �J       �          0    17271    booking 
   TABLE DATA           h   COPY public.booking (id, year, month, day, "time", id_hall, id_back, id_user, state, price) FROM stdin;
    public          postgres    false    228   �K       �          0    17293    booking_light 
   TABLE DATA           A   COPY public.booking_light (id, id_booking, id_light) FROM stdin;
    public          postgres    false    230   �K       �          0    17254    hall 
   TABLE DATA           g   COPY public.hall (id, number_hall, title, description, price_days, price_end, img, status) FROM stdin;
    public          postgres    false    226   L       �          0    17244    light 
   TABLE DATA           K   COPY public.light (id, title, description, price, img, status) FROM stdin;
    public          postgres    false    224   �M       �          0    17237    my_user 
   TABLE DATA           =   COPY public.my_user (id, login, password, email) FROM stdin;
    public          postgres    false    222    P                  0    0    admin_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.admin_id_seq', 1, true);
          public          postgres    false    215                       0    0    back_color_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.back_color_id_seq', 12, true);
          public          postgres    false    219                       0    0    background_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.background_id_seq', 3, true);
          public          postgres    false    217                       0    0    booking_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.booking_id_seq', 1, false);
          public          postgres    false    227                       0    0    booking_light_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.booking_light_id_seq', 1, false);
          public          postgres    false    229                       0    0    hall_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.hall_id_seq', 5, true);
          public          postgres    false    225                       0    0    light_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.light_id_seq', 5, true);
          public          postgres    false    223                       0    0    my_user_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.my_user_id_seq', 1, false);
          public          postgres    false    221            J           2606    17212    admin admin_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.admin
    ADD CONSTRAINT admin_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.admin DROP CONSTRAINT admin_pkey;
       public            postgres    false    216            N           2606    17230    back_color back_color_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.back_color
    ADD CONSTRAINT back_color_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.back_color DROP CONSTRAINT back_color_pkey;
       public            postgres    false    220            L           2606    17222    background background_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.background
    ADD CONSTRAINT background_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.background DROP CONSTRAINT background_pkey;
       public            postgres    false    218            X           2606    17298     booking_light booking_light_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.booking_light
    ADD CONSTRAINT booking_light_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.booking_light DROP CONSTRAINT booking_light_pkey;
       public            postgres    false    230            V           2606    17276    booking booking_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.booking
    ADD CONSTRAINT booking_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.booking DROP CONSTRAINT booking_pkey;
       public            postgres    false    228            T           2606    17262    hall hall_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.hall
    ADD CONSTRAINT hall_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.hall DROP CONSTRAINT hall_pkey;
       public            postgres    false    226            R           2606    17252    light light_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.light
    ADD CONSTRAINT light_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.light DROP CONSTRAINT light_pkey;
       public            postgres    false    224            P           2606    17242    my_user my_user_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.my_user
    ADD CONSTRAINT my_user_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.my_user DROP CONSTRAINT my_user_pkey;
       public            postgres    false    222            Y           2606    17231 "   back_color back_color_id_back_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.back_color
    ADD CONSTRAINT back_color_id_back_fkey FOREIGN KEY (id_back) REFERENCES public.background(id);
 L   ALTER TABLE ONLY public.back_color DROP CONSTRAINT back_color_id_back_fkey;
       public          postgres    false    220    4684    218            Z           2606    17282    booking booking_id_back_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.booking
    ADD CONSTRAINT booking_id_back_fkey FOREIGN KEY (id_back) REFERENCES public.back_color(id);
 F   ALTER TABLE ONLY public.booking DROP CONSTRAINT booking_id_back_fkey;
       public          postgres    false    220    228    4686            [           2606    17277    booking booking_id_hall_fkey    FK CONSTRAINT     z   ALTER TABLE ONLY public.booking
    ADD CONSTRAINT booking_id_hall_fkey FOREIGN KEY (id_hall) REFERENCES public.hall(id);
 F   ALTER TABLE ONLY public.booking DROP CONSTRAINT booking_id_hall_fkey;
       public          postgres    false    228    4692    226            \           2606    17287    booking booking_id_user_fkey    FK CONSTRAINT     }   ALTER TABLE ONLY public.booking
    ADD CONSTRAINT booking_id_user_fkey FOREIGN KEY (id_user) REFERENCES public.my_user(id);
 F   ALTER TABLE ONLY public.booking DROP CONSTRAINT booking_id_user_fkey;
       public          postgres    false    4688    222    228            ]           2606    17299 +   booking_light booking_light_id_booking_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.booking_light
    ADD CONSTRAINT booking_light_id_booking_fkey FOREIGN KEY (id_booking) REFERENCES public.booking(id);
 U   ALTER TABLE ONLY public.booking_light DROP CONSTRAINT booking_light_id_booking_fkey;
       public          postgres    false    228    230    4694            ^           2606    17304 )   booking_light booking_light_id_light_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.booking_light
    ADD CONSTRAINT booking_light_id_light_fkey FOREIGN KEY (id_light) REFERENCES public.light(id);
 S   ALTER TABLE ONLY public.booking_light DROP CONSTRAINT booking_light_id_light_fkey;
       public          postgres    false    230    224    4690            �      x�3�t���,,O-*������ 1`�      �   _   x�3�4��~q�ņ{/v_��ya��ƋM{�,�2v�7\lD���4¡�� $�pa߅�@�	MҐӘ���[/�F�0J ��z�U"F��� ��Y�      �     x�}�Mn�0���)|��z�n�� ݤ���
�R�	�P�ݱb"��_z�y7��� х-�o���WU������If0Z���Qa�TB^�H��HX^#�P�	��L&�r�Dc��,4}}�]��/]B��:�p�v΀�KF"�𵪨נ���w?;�z�k��^���d(s�Aa�Ob�G[s�r!�0Ćo���&��薧D�����ij
?�������څ(���g�w�)����>���A뫌��{��ͳ9      �      x������ � �      �      x������ � �      �   �  x��R;N�@��S���XIO�	�PAE;	 �@�5�0l��H9�̍x3�!Y�Ykg���xC��(�¬�����α�3��SA%��������7ZQjx�1'�P�����T<�!k ���\k|
���� S%�(����좂�dD�v��#G��^7h=�DO�Φ���3�q�p�?�u�k{��og�_�����Lu,�z��W�I��O�7�5hK�QLH;U��*V��,��L��T�4пD]B�M�Y(�^��c_�g*�II��@4o�!�P�Tnk@jt&7H;�U ���e˨K��웫�#���vw+�@����������D��hSt��\����J��|.��nkE�/wS�9|�����yE��      �   T  x�uTMo�@=o~���4� D�$��\�@	T!�8%)�V�=���1	8�������fm')pp>fg޼�v�M��{�{gwZ[[F~H*3?�B�������J��Q�g&~d�!|$�������?��R<s�uN��%A�>�yо��o�Ew�:$�Hp���⋥��Y��>����4|�%������m�{�b����wMh�G��F�Q#��)�;I����5����x{/~�S4{�~��G&�Su����5xZ��cmC�3+�IL�/�e��gT}T��1bA�ѵ����� �O�u^#�ձ�f�
�T��.��ǡ>��aB�v�eP\��&,x���>�Y�V��ش*;��M?�FΔ)x�NA ���Ö�����{�H`�ҿ$�"�S�ͮ�g�����w�U��!��,��ў��E����P���Ev%������M}�rgu��>ܹm�38����q��jw\mvV/E8���kC}i�V;�6q4r*�g�9����?��3��MԻ�4ۥ�)e��r�v�>��9�>���5
����Se8�.1�\� �K/�WxGp�O���Rv�F���9�U      �      x������ � �     