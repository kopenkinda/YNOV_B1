-- 2.1
select *
from Produit;

-- 2.2
select *
from Produit
limit 10;

-- 2.3
select *
from Produit
order by PrixUnit;

-- 2.4
select *
from Produit
order by PrixUnit desc
limit 3;

-- 3.1
select *
from Client
where Ville = 'Paris';

-- 3.2
select *
from Client
where Pays in ('Suisse', 'Allemagne', 'Belgique');

-- 3.3
select *
from Client
where Fax is NULL;

-- 3.4
select *
from Client
where Societe like '%restaurant%';

-- 4.1
select Description
from Categorie;

-- 4.2
select distinct Pays
from Client;

-- 4.3
select distinct Pays, Ville
from Client
order by Pays, Ville;

-- 5.1
select *
from Produit
where QteParUnit like '%canette%'
or QteParUnit like '%bouteille%';

-- 5.2
select Societe, Contact, Ville
from Fournisseur
where Pays = 'France'
order by Ville;

-- 5.3
select *
from Produit
where NoFour = 8
and PrixUnit between 10 and 100;

-- 5.4
select *
from Commande
where Pays = 'France'
and VilleLiv in ('Lille', 'Lyon', 'Nantes');

-- 5.5
select *
from Produit
where (Nomprod like '%tofu%'
or Nomprod like '%choco%')
and PrixUnit < 100;