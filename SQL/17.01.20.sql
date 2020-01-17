--1.7
select
  f.NoFour,
  f.Societe,
  count(p.UnitesCom)
from
  Fournisseur f
  join Produit p on f.NoFour = p.NoFour
where
  p.UnitesCom = 0
group by
  f.Societe;

--1.8
select
  f.Societe,
  cl.CodeCli
from
  Fournisseur f
  inner join Produit p on f.NoFour = p.NoFour
  inner join DetailCommande d on p.Refprod = d.Refprod
  inner join Commande co on co.Nocom = d.Nocom
  inner join Client cl on co.CodeCli = cl.CodeCli;

--1.9
select
  Pays,
  count(NoFour)
from
  Fournisseur
group by
  Pays;

--1.10
select
  PrixUnit,
  (Remise * 100) as "Remise en pourcentage",
  round((PrixUnit - PrixUnit * Remise), 2) as "prix unitaire avec remise",
  round((PrixUnit * (1 - Remise)), 2) as "montant de la remise"
from
  DetailCommande
where
  Remise >.05;

--2.1
select
  p.Nomprod,
  sum(p.UnitesCom)
from
  Produit p
  inner join DetailCommande d on p.Refprod = d.Refprod
  inner join Commande co on d.Nocom = co.Nocom
where
  co.PaysLiv = "France"
group by
  p.Nomprod;

--2.2
--2.3
select
  *
from
  Produit
where
  PrixUnit = (
    select
      min(PrixUnit)
    from
      Produit
  )
  or PrixUnit = (
    select
      max(PrixUnit)
    from
      Produit
  );

--2.4
select
  cl.Societe,
  count(co.noCom) as "Commande Qtt"
from
  Client cl
  join Commande co on cl.CodeCli = co.CodeCli
group by
  co.CodeCli
order by
  "Commande Qtt" desc
limit
  5;

--2.5
-- select f.Societe
-- from Fournisseur f
-- join Produit p on f.NoFour = p.NoFour
-- where
--     (select count(NoFour) from Produit group by NoFour) = 2;
